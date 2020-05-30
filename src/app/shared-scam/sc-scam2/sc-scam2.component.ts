import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sc-scam2',
  template: `
    <p>
      sc-scam2 works!
    </p>
  `,
  styles: [
  ],
})
export class ScScam2Component implements OnInit {

  a = 'ScScam2Component works!TS'

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [ScScam2Component],
  imports: [
    CommonModule,
  ],
  exports: [ScScam2Component]
})
export class ScScam2Module {}
