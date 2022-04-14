import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProyectoComponent } from './backend/proyecto/proyecto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AvancesComponent } from './pages/avances/avances.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { VeravancesComponent } from './pages/veravances/veravances.component';
import { VergastosComponent } from './pages/vergastos/vergastos.component';
import { VerproyectoComponent } from './pages/verproyecto/verproyecto.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

import{map}from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';
import { CrudGastosComponent } from './backend/crud-gastos/crud-gastos.component';
import { UseradminComponent } from './pages/useradmin/useradmin.component';
import { CrudGastosDiariosComponent } from './backend/crud-gastos-diarios/crud-gastos-diarios.component';
import { CrudAdictivosComponent } from './backend/crud-adictivos/crud-adictivos.component';
import { ResultadoSemanasComponent } from './components/resultado-semanas/resultado-semanas.component';
import { VersemanasComponent } from './pages/versemanas/versemanas.component';
import { ResultadoProyectoComponent } from './components/resultado-proyecto/resultado-proyecto.component';
import { VerproyectosComponent } from './pages/verproyectos/verproyectos.component';
import { CrudAvancesComponent } from './backend/crud-avances/crud-avances.component';
import { CrudAvancesDiariosComponent } from './backend/crud-avances-diarios/crud-avances-diarios.component';
import { DetallesAvancesComponent } from './components/detalles-avances/detalles-avances.component';
import { DetallesGastosComponent } from './components/detalles-gastos/detalles-gastos.component';



// const uidAdmin ='HB2Ctxrr9dOGahN97qopZCHimjB3';
// const onlyAdmin = () => map((user : any) => !!user && user.uid ==uidAdmin );




const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'proyecto', component: ProyectoComponent,canActivate: [AngularFireAuthGuard] },
  {path : 'registro', component: RegistroComponent,canActivate: [AngularFireAuthGuard]  },
  {path : 'avances', component: AvancesComponent,canActivate: [AngularFireAuthGuard]},
  {path: 'gastos', component: GastosComponent,canActivate: [AngularFireAuthGuard]},
  {path : 'perfil', component:PerfilComponent,canActivate: [AngularFireAuthGuard]},
 // {path: 'registro', component: RegistroComponent},
  {path: 'veravances', component: VeravancesComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'vergastos', component: VergastosComponent,canActivate: [AngularFireAuthGuard]},
  {path: 'verproyecto', component:VerproyectoComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'crud-gastos', component:CrudGastosComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'useradmin', component:UseradminComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'crud-gastos-diarios', component:CrudGastosDiariosComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'crud-adictivos', component:CrudAdictivosComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'versemanas', component:VersemanasComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'resultado-semanas', component:ResultadoSemanasComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'resultado-proyecto', component:ResultadoProyectoComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'verproyectos', component:VerproyectosComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'crud-avances', component:CrudAvancesComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'crud-avances-diarios', component:CrudAvancesDiariosComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'detalles-avances', component:DetallesAvancesComponent,canActivate: [AngularFireAuthGuard] },
  {path: 'detalles-gastos', component:DetallesGastosComponent,canActivate: [AngularFireAuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
