import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { signOut } from '../../store/auth/actions/auth.actions'

@Component({
  selector: 'app-user-settings-dropdown',
  templateUrl: './user-settings-dropdown.component.html',
  styleUrls: ['./user-settings-dropdown.component.css']
})
export class UserSettingsDropdownComponent implements OnInit {

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
  }
  signOut() {
    this.store.dispatch(signOut());
  }

}
