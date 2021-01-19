import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p class="bold">
      header works!
    </p>
  `,
  styles: [
    `.bold { font-weight: bolder; color: red; }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
