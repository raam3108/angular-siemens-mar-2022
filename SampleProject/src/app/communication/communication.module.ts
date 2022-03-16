import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';



@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommunicationModule { }
