import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc2',
  template: `
    <p>
      sc2 works!
    </p>
  `,
  styles: [
  ],
})
export class Sc2Component implements OnInit {

  a = 'Sc2Component works!TS';

  constructor() { }

  ngOnInit(): void {
  }

}
