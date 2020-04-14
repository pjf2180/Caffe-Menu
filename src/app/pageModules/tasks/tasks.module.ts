import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    SharedModule
  ]
})
export class TasksModule { }
