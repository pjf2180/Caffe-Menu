import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SidebarService, MenuGroup } from 'src/app/services/sidebar.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() sideMenuState: boolean;
  @Output() togleSideMenu: EventEmitter<boolean> = new EventEmitter();
  menuGroupVm: MenuGroup[];
  constructor(public sideBarService: SidebarService) {
    this.menuGroupVm = sideBarService.userMenu;
  }

  ngOnInit() {
  }
  requestSideMenuToggle() {
    this.togleSideMenu.emit(!this.sideMenuState)
  }


}
