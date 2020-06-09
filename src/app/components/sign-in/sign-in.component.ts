import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public router: Router, public route: ActivatedRoute, public auth: AuthService) {
    this.formGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }

  signIn() {
    console.log('Signin in')
    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;

    console.log(this.formGroup.value)

    this.auth.login(email, password)
      .then(result => this.router.navigate(['user']))
      .catch(err => console.error(err));

  }
  redirectToRegister() {
    this.router.navigate(['register'], { relativeTo: this.route })
  }
}
