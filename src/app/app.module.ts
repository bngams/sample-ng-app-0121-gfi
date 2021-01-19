import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { HeaderComponent } from './components/layout/header.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

// decorator
// Angular = module Angular
// Classe qui permet de charger des fonctionnalités angular
// declarations => declarer des syntaxes HTML
// imports => importer des fonctionnalités qui proviennent d'autres modules
// providers => contextContainers / DI
// boostrap => elements dispos au lancement de l'app
@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    HeaderComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
