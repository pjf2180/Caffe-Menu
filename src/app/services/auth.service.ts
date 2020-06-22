import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth as fireAuth } from 'firebase'
import { AppUser } from '../models/user.models';
import { AppUserCollection } from '../db/firebase-db/collections/app-user.collections';

export enum AuthProvider {
  google,
  emailPass
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  googleProvider: fireAuth.GoogleAuthProvider;

  user: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth, private appUserCollection: AppUserCollection<AppUser>, private ngZone: NgZone) {
    this.user = afa.user;
    this.googleProvider = new fireAuth.GoogleAuthProvider();
    this.googleProvider.setCustomParameters({ prompt: 'select_account' });
  }
  async login(provider: AuthProvider, username?: string, password?: string): Promise<AppUser> {
    //Could be switched to a factoy pattern
    switch (provider) {
      case AuthProvider.emailPass:
        return this.signInEmailAndPass(username, password);
      case AuthProvider.google:
        return this.googleSignIn();
      default:
        throw new Error(` Auth provider type not found`);
    }

  }
  isAuthenticated() {
    return this.afa.authState;
  }
  logout() {
    return this.afa.auth.signOut();
  }
  createAccount(email: string, password: string, firstname: string, lastname: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(fireAuthCredential => this.userToAppUser(fireAuthCredential.user))
      .then(appUser => {
        appUser.username = `${firstname} ${lastname}`;
        return this.createUserDocument(appUser);
      })
  }
  async createUserDocument(appUser: AppUser) {
    try {
      await this.appUserCollection.add(appUser, appUser.id);
    } catch (error) {
      console.log(error);
    }
    return appUser;
  }
  private signInEmailAndPass(username: string, password: string): Promise<AppUser> {
    return this.afa.auth.signInWithEmailAndPassword(username, password)
      .then((userCrdential: fireAuth.UserCredential) => userCrdential.user)
      .then(this.userToAppUser)
  }
  private googleSignIn(): Promise<AppUser> {
    return this.afa.auth.signInWithPopup(this.googleProvider)
      .then((userCrdential: fireAuth.UserCredential) => userCrdential.user)
      .then(this.userToAppUser)
  }
  public userToAppUser(user: firebase.User): AppUser {
    return {
      id: user.uid,
      email: user.email,
      photo: user.photoURL,
      username: user.displayName,
      phone: user.phoneNumber
    }
  }
}
