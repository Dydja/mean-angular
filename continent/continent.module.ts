import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContinentRoutingModule } from './continent-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContinentRoutingModule
  ]
})
export class ContinentModule { }
