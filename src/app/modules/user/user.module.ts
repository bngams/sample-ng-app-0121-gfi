import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [ProfileFormComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: []
})
export class UserModule { }
