import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DemandaComponent } from './components/demanda/demanda.component';
import { LoginComponent } from './components/login/login.component';
import { DefinicionesComponent } from './components/definiciones/definiciones.component';
// import { from } from 'rxjs';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'demanda', component: DemandaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'definiciones', component: DefinicionesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
