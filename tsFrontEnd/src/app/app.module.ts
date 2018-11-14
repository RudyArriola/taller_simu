import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './modulos/material.module';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { DemandaComponent } from './components/demanda/demanda.component';
import { LoginComponent } from './components/login/login.component';
import { DefinicionesComponent } from './components/definiciones/definiciones.component';
// import { User } from './modulos/user';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    DemandaComponent,
    LoginComponent,
    DefinicionesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  key: string;
  name: string;
  age: number;
  active = true;
}
