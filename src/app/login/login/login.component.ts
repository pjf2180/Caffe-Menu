import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
    username: '',
    password: '' 
  };
  formGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.formGroup = new FormGroup({
      username: new FormControl(this.credentials.username),
      password: new FormControl(this.credentials.password)
    })
  }

  ngOnInit() {
    // this.signIn();
  }
  signIn() {

    const userName = this.formGroup.value.username;
    const password = this.formGroup.value.password;

    this.authService.login(userName, password)
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
