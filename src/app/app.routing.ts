//Este es mi fichero de rutas que he creado yo manualmente

//Importamos los módulos del router:
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

//Importo mis componentes
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from "./components/error/error.component";
import { DetailComponent} from "./components/detail/detail.component";

//Creo mis rutas - appRoutes - un array de objetos de tipo Routes
const appRoutes: Routes = [
  {path:'', component: AboutComponent},
  {path: 'sobre-mi', component:AboutComponent},
  {path: 'proyectos', component:ProjectsComponent},
  {path: 'crear-proyecto', component:CreateComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'proyecto/:id', component:DetailComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', component:ErrorComponent} //Ruta para cuando la ruta que pongamos no se encuentre o sea incorrecta
];

//Exportamos la configuración de las rutas

export const appRoutingProviders: any[] = []; //decimos que es un array de tipo any
export const  routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //Carga nuestra configuración de rutas en el router de Angular
