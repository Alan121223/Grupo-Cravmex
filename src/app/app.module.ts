import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './pages/login/login.component';







@NgModule({
  declarations: [AppComponent,
  LoginComponent ],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
  CommonModule,
  AngularFireModule.initializeApp(environment.confirebaseConfig),
  AngularFireAuthModule
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
