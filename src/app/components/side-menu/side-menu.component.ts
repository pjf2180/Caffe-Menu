import { Component, OnInit } from '@angular/core';
import { SidebarService, MenuGroup } from 'src/app/services/sidebar.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { Observable } from 'rxjs';
import { selectIsAuth } from 'src/app/store/auth/selectors/auth.selectors';
import { Router } from '@angular/router';
import { setDrawerState } from '../../store/userComponentUI/actions/user-component-ui.actions'
import { UserRoutingPaths } from 'src/app/pageModules/user/user-routing.module';
import { signOut } from '../../store/auth/actions/auth.actions'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  menuGroupVm: MenuGroup[];
  signedIn$: Observable<boolean>;

  constructor(public sideBarService: SidebarService, public store: Store<AppState>, public router: Router) {
    this.menuGroupVm = sideBarService.userMenu;
  }

  ngOnInit() {
    this.signedIn$ = this.store.select(selectIsAuth);
  }

  onNavBtnClick(route: string) {
    this.router.navigate([route])
      .then(() => this.store.dispatch(setDrawerState({ open: false })))
  }
  onSearch() {
    this.router.navigate([UserRoutingPaths[UserRoutingPaths.menu]])
  }
  signOut() {
    this.store.dispatch(signOut())
  }
}
