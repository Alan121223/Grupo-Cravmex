
import { MenuComponent } from './components/menu/menu.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './pages/home/home.component';
import { AvancesComponent } from './pages/avances/avances.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProyectoComponent } from './backend/proyecto/proyecto.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VeravancesComponent } from './pages/veravances/veravances.component';
import { VergastosComponent } from './pages/vergastos/vergastos.component';
import { VerproyectoComponent } from './pages/verproyecto/verproyecto.component';
import { CrudGastosComponent } from './backend/crud-gastos/crud-gastos.component';
import { UseradminComponent } from './pages/useradmin/useradmin.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CrudGastosDiariosComponent } from './backend/crud-gastos-diarios/crud-gastos-diarios.component';
import { CrudAdictivosComponent } from './backend/crud-adictivos/crud-adictivos.component';
import { ResultadoSemanasComponent } from './components/resultado-semanas/resultado-semanas.component';
import { VersemanasComponent } from './pages/versemanas/versemanas.component';
import { ResultadoProyectoComponent } from './components/resultado-proyecto/resultado-proyecto.component';
import { VerproyectosComponent } from './pages/verproyectos/verproyectos.component';
import { CrudAvancesComponent } from './backend/crud-avances/crud-avances.component';
import { CrudAvancesDiariosComponent } from './backend/crud-avances-diarios/crud-avances-diarios.component';
import { DetallesAvancesComponent } from './components/detalles-avances/detalles-avances.component';







@NgModule({
  declarations: [AppComponent,
  HomeComponent,
  AvancesComponent,
  GastosComponent,
LoginComponent,
PerfilComponent,
ProyectoComponent,
RegistroComponent,
VeravancesComponent,
VergastosComponent,
VerproyectoComponent,
MenuComponent,
CrudGastosComponent,
UseradminComponent,
CrudGastosDiariosComponent,
CrudAdictivosComponent,
ResultadoSemanasComponent, 
VersemanasComponent,
ResultadoProyectoComponent,
VerproyectosComponent,
CrudAvancesComponent,
CrudAvancesDiariosComponent,
DetallesAvancesComponent
],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    FormsModule,
     AppRoutingModule,
     CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    
   
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
