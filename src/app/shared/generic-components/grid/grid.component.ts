import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnDestroy {

  private _mobileQueryListener: () => void;
  private _xmQueryListener: () => void;
  mobileQuery: MediaQueryList;
  xm: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(min-width: 1200px)');
    this.xm = media.matchMedia('(min-width: 425px)');
    this._mobileQueryListener = () => {
      console.log('Media breakpoint');
      changeDetectorRef.detectChanges();
    };
    this._xmQueryListener = () => {
      console.log('Media breakpoint');
      changeDetectorRef.detectChanges();
      
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.xm.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.xm.removeListener(this._mobileQueryListener);
  }

}
