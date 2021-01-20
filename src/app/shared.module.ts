import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
