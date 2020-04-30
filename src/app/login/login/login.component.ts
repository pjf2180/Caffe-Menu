import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
interface Credentials {
  username?: string;
  password?: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = {
    username: 'pjf2180@me.com',
    password: 'Robitussin123'
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signIn();
  }
  signIn() {
    this.authService.login(this.credentials.username, this.credentials.password)
      .then(userCredential => {
        console.log(userCredential);
        this.router.navigate(['/'])
      })
      .catch(reason => {
        console.log(reason)
      });
  }
  signUp() {
    this.authService.createAccount(this.credentials.username, this.credentials.password)
      .then(_ => {
        console.log('Logged in succesfully')
      })
      .catch(err => console.log(err));
  }

}
