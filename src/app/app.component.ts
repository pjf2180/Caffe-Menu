import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-boiler-plate';
  constructor(public afa: AngularFireAuth) {

  }
  ngOnInit(): void {
    console.log(this.afa.auth.currentUser);
    
  }
  
}
