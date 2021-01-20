import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { MaterialModule } from 'src/app/material.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [ProfileFormComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
