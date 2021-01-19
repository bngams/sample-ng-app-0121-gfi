import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <span class="bold">
      {{headerTitle}}
    </span>
    <a class="menu-item" [routerLink]="'/home'" [routerLinkActive]="'active'">Home</a>
    <a class="menu-item" routerLink="/get-started" routerLinkActive="active">Get Started</a>
  `,
  styles: [`
    .bold { font-weight: bolder; color: red; }
    .menu-item { margin: 0 15px; }
  `]
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerTitle);
    this.headerTitle = 'Something';
  }

}
