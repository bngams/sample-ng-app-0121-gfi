import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';



@NgModule({
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
