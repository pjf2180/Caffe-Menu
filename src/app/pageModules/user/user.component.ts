import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AppState } from 'src/app/store/root-reducer';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectDrawerState } from '../../store/userComponentUI/selectors/user-component-ui.selectors'
import { togleDrawerState } from '../../store/userComponentUI/actions/user-component-ui.actions'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  open: boolean = false;
  drawerState$: Observable<boolean>;
  drawerStateSub : Subscription; 
  matSideNavMode: string = 'over';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public store: Store<AppState>) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  // Lifecycle
  ngOnInit() {
    this.drawerState$ = this.store.select(selectDrawerState);
    this.drawerStateSub = this.drawerState$.subscribe(open => {
      this.open = open;
    })
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.drawerStateSub.unsubscribe();
  }

  onOpen() {
    // console.log('Opened');
  }
  onClose() {
    // console.log('Closed');
  }
}
