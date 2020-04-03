import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: MenuItem[] = [
    {
      title: 'Home',
      icon: 'mdi mdi-gauge',
      links: [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'ProgressBar', route: '/progress' },
        { label: 'Estadisticas', route: '/graficas1' },
        { label: 'Promesas', route: '/promises' },
        { label: 'Rxjs', route: '/rxjs' },
      ]
    }
  ]
  constructor() { }
}
export interface MenuItem {
  title: string;
  icon: string;
  links: {
    label: string, route: string
  }[]
}
