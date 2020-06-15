import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth) {
    this.user = afa.user;
    this.isAuthenticated();
  }
  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password);
  }
  createAccount(email: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password)
  }
  isAuthenticated() {
    return this.afa.authState;
  }

}
