import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    ComponentsModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
