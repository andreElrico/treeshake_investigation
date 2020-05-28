import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sc-scam1',
  template: `
    <p>
      sc-scam1 works!
    </p>
  `,
  styles: [
  ],
})
export class ScScam1Component implements OnInit {

  a = 'ScScam1Component works!TS'

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  bootstrap: [ScScam1Component],
  declarations: [ScScam1Component],
  imports: [
    CommonModule,
  ],
  exports: [ScScam1Component]
})
export class ScScam1Module {}
