
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
import { UseroperativeComponent } from './pages/useroperative/useroperative.component';
import { UseradminComponent } from './pages/useradmin/useradmin.component';




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
MenuComponent,UseroperativeComponent,
UseradminComponent
],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    FormsModule,
     AppRoutingModule,
     CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule


    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
