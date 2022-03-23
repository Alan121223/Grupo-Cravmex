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
import { UseradminComponent } from './pages/useradmin/useradmin.component';
import { UseroperativeComponent } from './pages/useroperative/useroperative.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'proyecto', component: ProyectoComponent },
  {path : 'registro', component: RegistroComponent },
  {path : 'avances', component: AvancesComponent},
  {path: 'gastos', component: GastosComponent},
  {path : 'perfil', component:PerfilComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'veravances', component: VeravancesComponent},
  {path: 'vergastos', component: VergastosComponent},
  {path: 'verproyecto', component:VerproyectoComponent },
  {path: 'useradmin', component:UseradminComponent},
  {path: 'useroperative', component:UseroperativeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
