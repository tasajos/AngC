import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarModUsuarioComponent } from './components/agregar-mod-usuario/agregar-mod-usuario.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { FrontUComponent } from './components/front-u/front-u.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarModUsuarioComponent,
    ListadoUsuarioComponent,
    VerUsuarioComponent,
    FrontUComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
