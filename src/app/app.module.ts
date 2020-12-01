import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"; //para usar formularios con two-way data bindingnpm
import { routing, appRoutingProviders} from "./app.routing"; //importo el archivo de rutas que he creado manualmente y los añado dentro de @NgModule imports y providers:

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent} from "./components/detail/detail.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ContactService} from "./services/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule //Para crear un formulario de contacto reactivo
  ],
  providers: [
    appRoutingProviders,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
