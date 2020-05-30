import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';
import { SharedScamModule } from './shared-scam/shared-scam.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
    SharedScamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
