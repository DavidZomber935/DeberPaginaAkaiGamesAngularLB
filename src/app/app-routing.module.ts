import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { VisitanosComponent } from './visitanos/visitanos.component';
import { Err404Component } from './err404/err404.component';
import { RedesContactoComponent } from './redes-contacto/redes-contacto.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'acerca',component:AcercaComponent},
  {path: 'visitanos',component:VisitanosComponent},
  {path: 'redes-contacto', component: RedesContactoComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', component:Err404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
