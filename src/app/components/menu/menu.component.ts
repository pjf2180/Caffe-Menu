import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() sideMenuState: boolean;
  @Output() togleSideMenu: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  requestSideMenuToggle(){
    this.togleSideMenu.emit(!this.sideMenuState)
  }
  

}
