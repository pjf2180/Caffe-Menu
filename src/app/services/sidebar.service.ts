import { Injectable } from '@angular/core';
import * as fromDashboardRouting from '../dashboard/dashboard-routing.module'
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: MenuGroup[] = [
    {
      title: 'Home',
      icon: 'mdi mdi-gauge',
      links: [
        { label: 'Image Finder', route: fromDashboardRouting.imageFinderPath },
        { label: 'Favorites', route: fromDashboardRouting.imageFavoritesPath },
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
