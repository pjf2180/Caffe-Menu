import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth) {
    this.user = afa.user;
  }
  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username, password);
  }
  createAccount(email: string, password: string) {
    return this.afa.auth.createUserWithEmailAndPassword(email, password)
  }

}
