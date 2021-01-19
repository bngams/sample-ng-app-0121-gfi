import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p class="bold">
      {{headerTitle}}
    </p>
  `,
  styles: [
    `.bold { font-weight: bolder; color: red; }`
  ]
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerTitle);
    this.headerTitle = 'Something';
  }

}
