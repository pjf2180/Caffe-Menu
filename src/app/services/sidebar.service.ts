import { Injectable } from '@angular/core';
import * as fromDashboardRouting from '../dashboard/dashboard-routing.module'
import { UserRoutingPaths, userMainRoute } from '../pageModules/user/user-routing.module';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  adminMenu: MenuGroup[] = [
    {
      title: 'Home',
      icon: 'mdi mdi-gauge',
      links: [
        { label: 'Tasks', route: '/' + fromDashboardRouting.overviewPath },
        { label: 'Products', route: '/' + fromDashboardRouting.adminProductsPath },
      ]
    }
  ];

  userMenu: MenuGroup[] = [
    {
      title: '',
      icon: '',
      links: [
        { label: 'Menu', route: `/${userMainRoute}/${UserRoutingPaths[UserRoutingPaths.menu]}` },
        { label: 'About', route: `/${userMainRoute}/${UserRoutingPaths[UserRoutingPaths.home]}` },
      ]
    }
  ]
  constructor() { }
}
export interface MenuGroup {
  title: string;
  icon: string;
  links: {
    label: string, route: string
  }[]
}
