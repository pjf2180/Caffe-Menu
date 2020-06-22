import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
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
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, this.forbiddenNameValidator())

  }

  ngOnInit() {
  }
  register() {
    if (this.formGroup.invalid) { return }
    const { email, firstname, lastname, password } = this.formGroup.value;
    this.auth.createAccount(email, password, firstname, lastname)
      .then(() => this.router.navigate(['signin']))
      .catch(err => console.error(err));
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const { password, confirmPassword } = control.value;
      return password === confirmPassword ? null : { passwordmatch: true };
    };
  }

}
