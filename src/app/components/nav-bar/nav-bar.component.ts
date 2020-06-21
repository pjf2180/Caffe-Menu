import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { SidebarService, MenuGroup } from 'src/app/services/sidebar.service';
import { AppState } from 'src/app/store/root-reducer';
import { Store } from '@ngrx/store';
import { selectIsAuth } from '../../store/auth/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { togleDrawerState } from 'src/app/store/userComponentUI/actions/user-component-ui.actions';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  menuGroupVm: MenuGroup[];
  signedIn$: Observable<boolean>;

  constructor(public sideBarService: SidebarService, public store: Store<AppState>) {
    this.menuGroupVm = sideBarService.userMenu;
  }

  ngOnInit() {
    this.signedIn$ = this.store.select(selectIsAuth);
  }
  requestSideMenuToggle() {
    this.store.dispatch(togleDrawerState())
  }


}
