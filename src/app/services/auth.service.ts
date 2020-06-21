import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
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
  login(provider: AuthProvider, username?: string, password?: string): Promise<AppUser> {
    switch (provider) {
      case AuthProvider.emailPass:
        return this.signInEmailAndPass(username, password);
      case AuthProvider.google:
        return this.googleSignIn();
      default:
        throw new Error(` Auth provider type not found`);
    }

  }
  private signInEmailAndPass(username: string, password: string): Promise<AppUser> {
    return this.afa.auth.signInWithEmailAndPassword(username, password)
      .then((userCrdential: fireAuth.UserCredential) => userCrdential.user)
      .then(this.userToAppUser)
  }
  private googleSignIn(): Promise<AppUser> {
    return this.afa.auth.signInWithPopup(this.googleProvider)
      .then((userCrdential: fireAuth.UserCredential) => userCrdential.user)
      .then(firbaseUser => this.userToAppUser(firbaseUser))
  }
  createAccount(email: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password)
  }
  isAuthenticated() {
    return this.afa.authState;
  }
  logout() {
    return this.afa.auth.signOut();
  }
  async createUser(appUser: AppUser) {

    console.log('Creating user...');

    try {

      //Checking to see if user exists in database
      const user = await this.appUserCollection.getById(appUser.id);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    return appUser;
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
