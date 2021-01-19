import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  // /user/profile
  { path: 'user', loadChildren:
    () => import('./modules/user/user.module')
      .then(m => m.UserModule) },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard => put at the end
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // declarations
  // providers
  // import, use features
  imports: [RouterModule.forRoot(routes)],
  // exports => set for others
  exports: [RouterModule]
})
export class AppRoutingModule { }
