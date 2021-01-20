import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <mat-drawer-container class="example-container">
      <mat-drawer mode="side" opened>Drawer content</mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
