import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: 'profile', component: ProfileFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
