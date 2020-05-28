import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SharedScamModule } from '../shared-scam/shared-scam.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SharedScamModule
  ]
})
export class Feature1Module { }
