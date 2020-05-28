import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from './feature1/feature1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
