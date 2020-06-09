import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  // Sidenav's initial state
  open: boolean;
  matSideNavMode: string = 'side';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this.open = this.mobileQuery.matches;
    this.matSideNavMode = this.mobileQuery.matches ? 'side' : 'over';
    console.log(this.open);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  // Lifecycle
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onOpen() {
    // console.log('Opened');
  }
  onClose() {
    // console.log('Closed');
  }
  // app-menu output event handler
  onSideMenuToggle(event) {
    this.open = !this.open;
  }

}
