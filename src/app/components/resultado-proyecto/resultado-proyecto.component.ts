import { Component, OnInit, Input } from '@angular/core';
import { Proyecto, Avances, UserI } from '../../models/models';
import { AlertController, ModalController } from '@ionic/angular';
import { ProyectoComponent } from '../../backend/proyecto/proyecto.component';
import { ResultadoSemanasComponent } from '../resultado-semanas/resultado-semanas.component';
import { CrudAvancesDiariosComponent } from '../../backend/crud-avances-diarios/crud-avances-diarios.component';
import { DetallesAvancesComponent } from '../detalles-avances/detalles-avances.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-resultado-proyecto',
  templateUrl: './resultado-proyecto.component.html',
  styleUrls: ['./resultado-proyecto.component.scss'],
})
export class ResultadoProyectoComponent implements OnInit {

  @Input() resultados: Avances;
  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;
  constructor(public modalController: ModalController,
    public firestoreService: FirestoreService,
  private router: Router, private auth: AuthService,
  public alertController: AlertController,
  private interactionService: InteractionService,
  private database: FirestoreService) { }

  ngOnInit() {
    console.log('el input es ',this.resultados);
       
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
      component: CrudAvancesDiariosComponent,
      componentProps:{avances: this.resultados}
    });
    return await modal.present();
  }

  async informacion() {
    const modal = await this.modalController.create({
      component: DetallesAvancesComponent,
      componentProps:{resultado: this.resultados}
    });
    return await modal.present();
  }
  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestoreService.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
           this.rol= res.perfil
        }
    })
    
  }
  
}
