import { Component, OnInit } from '@angular/core';
import { SidebarService, MenuGroup } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuGroupVm: MenuGroup[];
  constructor(private sideBarService: SidebarService) {
    this.menuGroupVm = sideBarService.menu;
  }

  ngOnInit() {
    console.log(this.menuGroupVm);
  }
  
}
