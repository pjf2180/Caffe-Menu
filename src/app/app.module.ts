import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { FirebaseDbModule } from './db/firebase-db/firebase-db.module';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    FirebaseDbModule,
    SharedModule,
    RootStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
