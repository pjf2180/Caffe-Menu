import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Sidenav's initial state
  open: boolean = true;  
  constructor() { }
  ngOnInit() {
  }
  onOpen(){
    // console.log('Opened');
  }
  onClose(){
    // console.log('Closed');
  }
  // app-menu output event handler
  onSideMenuToggle(event){
    this.open = event;
  }
}
