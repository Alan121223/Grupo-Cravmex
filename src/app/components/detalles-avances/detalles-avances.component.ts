import { Component, Input, OnInit } from '@angular/core';
import { Avances, AvancesDiarios } from '../../models/models';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-detalles-avances',
  templateUrl: './detalles-avances.component.html',
  styleUrls: ['./detalles-avances.component.scss'],
})
export class DetallesAvancesComponent implements OnInit {

@Input() resultado : Avances;

final: AvancesDiarios[]=[];


  constructor( private modalController:ModalController,
                private firestoreService:FirestoreService) { }

  ngOnInit() {}


getAvances(){
  const path = '/Avances/'+ this.resultado.id+'/AvancesDiarios';
 this.firestoreService.getCollection<AvancesDiarios>(path).subscribe(res=>{
   console.log('los avances son ',res);
   this.final=res;
 })
}


  cerrar(){
    this.modalController.dismiss();
  }
}
