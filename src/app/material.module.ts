import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule
];


@NgModule({
  // exports = public, will be available on imports
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
