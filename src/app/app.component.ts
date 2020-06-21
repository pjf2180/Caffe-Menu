import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from './store/root-reducer';
import * as authActions from './store/auth/actions/auth.actions'
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { setDrawerState } from './store/userComponentUI/actions/user-component-ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-boiler-plate';

  constructor(public store: Store<AppState>, public router: Router) {
  }
  ngOnInit(): void {
    this.store.dispatch(authActions.checkAuth());
    this.router.events.pipe(
      filter((e: RouterEvent) => (e instanceof NavigationEnd))
    ).subscribe((e: RouterEvent) => {
      this.store.dispatch(setDrawerState({ open: false }))
    });
  }

}
