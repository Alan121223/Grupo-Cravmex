import { Component, OnInit, Input } from '@angular/core';
import { Gastos, GatosDiarios } from '../../models/models';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-detalles-gastos',
  templateUrl: './detalles-gastos.component.html',
  styleUrls: ['./detalles-gastos.component.scss'],
})
export class DetallesGastosComponent implements OnInit {

  @Input() resultado : Gastos;

  final: GatosDiarios[]=[];
  
  
    constructor( private modalController:ModalController,
                  private firestoreService:FirestoreService) { }
  
    ngOnInit() {
      this.getAvances()
    }
  
  
  getAvances(){
    const path = '/Gastos/'+ this.resultado.id+'/GastosDiarios';
   this.firestoreService.getCollection<GatosDiarios>(path).subscribe(res=>{
     console.log('los avances son ',res);
     this.final=res;
   })
  }
  
  
    cerrar(){
      this.modalController.dismiss();
    }
}