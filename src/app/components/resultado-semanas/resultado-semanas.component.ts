import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Gastos, UserI } from '../../models/models';
import { CrudGastosDiariosComponent } from '../../backend/crud-gastos-diarios/crud-gastos-diarios.component';
import { FirestoreService } from '../../services/firestore.service';
import { DetallesGastosComponent } from '../detalles-gastos/detalles-gastos.component';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-semanas',
  templateUrl: './resultado-semanas.component.html',
  styleUrls: ['./resultado-semanas.component.scss'],
})
export class ResultadoSemanasComponent implements OnInit {


@Input() resultado: Gastos;


login : boolean =false;

// rol: 'visitante' | 'admin'= null;
rol: string;


  constructor(public modalController: ModalController,
    private firestore: FirestoreService,
    public firestoreService: FirestoreService,
  private router: Router, private auth: AuthService,
  public alertController: AlertController,
  private interactionService: InteractionService,
  ) { }

  ngOnInit() {

    console.log('el input es ',this.resultado);
    this.auth.stateUser().subscribe(res =>{
      if (res){
        console.log('estas logeado');
        this.getDatosUser(res.uid)
        this.login=true;
      }else{
        console.log('no estas logeado');
        this.login=false;
      }
    })
  }

  async detalles(){
    const modal = await this.modalController.create({
      component: CrudGastosDiariosComponent,
      componentProps:{gastos: this.resultado}
    });
    return await modal.present();
  }
  
  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
           this.rol= res.perfil
        }
    })
    
  }

 
  async informacion() {
    const modal = await this.modalController.create({
      component: DetallesGastosComponent,
      componentProps:{resultado: this.resultado}
    });
    return await modal.present();
  }
  
}
