import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from './store/root-state';
import * as authActions from './store/auth/actions/auth.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-boiler-plate';

  constructor(public store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.store.dispatch(authActions.checkAuth());
  }

}
