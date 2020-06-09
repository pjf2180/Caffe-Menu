import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() sideMenuState: boolean;
  @Output() togleSideMenu: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  requestSideMenuToggle(){
    this.togleSideMenu.emit(!this.sideMenuState)
  }
  

}
