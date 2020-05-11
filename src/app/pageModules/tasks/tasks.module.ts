import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ]
})
export class TasksModule { }
