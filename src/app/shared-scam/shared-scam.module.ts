import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScScam1Module } from './sc-scam1/sc-scam1.component';
import { ScScam2Module } from './sc-scam2/sc-scam2.component';



@NgModule({
  imports: [
    CommonModule,
    ScScam1Module,
    ScScam2Module,
  ],
  exports: [
  	ScScam1Module,
    ScScam2Module,
  ]
})
export class SharedScamModule { }
