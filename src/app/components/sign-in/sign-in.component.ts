import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import * as authActions from '../../store/auth/actions/auth.actions';
import { AppState } from '../../store/root-reducer'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public router: Router, public route: ActivatedRoute, public auth: AuthService, public store: Store<AppState>) {
    this.formGroup = new FormGroup({
      email: new FormControl('pjf2180@me.com'),
      password: new FormControl('Robitussin123')
    })
  }

  ngOnInit() {
  }

  signIn() {
    console.log('Signin in')
    const email: string = this.formGroup.value.email;
    const password: string = this.formGroup.value.password;
    this.store.dispatch(authActions.signIn({ user: email, password: password }));

    // from(this.auth.login(email, password))
    //   .subscribe(res => {
    //     console.log(res);
    //   })
    // this.auth.login(email, password)
    //   .then(result => this.router.navigate(['user']))
    //   .catch(err => console.error(err));

  }
  redirectToRegister() {
    this.router.navigate(['register'], { relativeTo: this.route })
  }
}
