import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AcercaComponent } from './acerca/acerca.component';
import { VisitanosComponent } from './visitanos/visitanos.component';
import { Err404Component } from './err404/err404.component';
import { RedesContactoComponent } from './redes-contacto/redes-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AcercaComponent,
    VisitanosComponent,
    Err404Component,
    RedesContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
