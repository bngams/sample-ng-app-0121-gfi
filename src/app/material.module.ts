import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatButtonModule
];


@NgModule({
  // exports = public, will be available on imports
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
