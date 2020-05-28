import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sc1Component } from './sc1/sc1.component';
import { Sc2Component } from './sc2/sc2.component';



@NgModule({
  declarations: [Sc1Component, Sc2Component],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
