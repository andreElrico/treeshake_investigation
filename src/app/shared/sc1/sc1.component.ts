import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc1',
  template: `
    <p>
      sc1 works!
    </p>
  `,
  styles: [
  ],
})
export class Sc1Component implements OnInit {

  a = 'Sc1Component works!TS';

  constructor() { }

  ngOnInit(): void {
  }

}
