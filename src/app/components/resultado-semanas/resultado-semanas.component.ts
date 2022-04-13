import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Gastos, UserI } from '../../models/models';
import { CrudGastosDiariosComponent } from '../../backend/crud-gastos-diarios/crud-gastos-diarios.component';
import { FirestoreService } from '../../services/firestore.service';

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
    private firestore: FirestoreService) { }

  ngOnInit() {

    console.log('el input es ',this.resultado);
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
 
  
}
