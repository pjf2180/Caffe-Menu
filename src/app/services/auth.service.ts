import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) {
    console.log('Auth service constructed')
  }
  login(username: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(username,password)
  }
  createAccount(email: string, password: string){
    return this.afa.auth.createUserWithEmailAndPassword(email,password)
  }
}
