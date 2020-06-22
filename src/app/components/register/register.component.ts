import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public auth: AuthService, public router: Router) {
    this.formGroup = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }
  register() {
    console.log(this.formGroup.value);
    const email = this.formGroup.value.email;
    const firstname = this.formGroup.value.firstname;
    const lastname = this.formGroup.value.lastname;
    const password = this.formGroup.value.password;
    this.auth.createAccount(email, password, firstname, lastname)
      .then(() => this.router.navigate(['signin']))
      .catch(err => console.error(err));
  }

}
