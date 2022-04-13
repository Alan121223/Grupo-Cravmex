import { Component, OnInit, Input } from '@angular/core';
import { Avances, AvancesDiarios } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AlertController, ModalController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-crud-avances-diarios',
  templateUrl: './crud-avances-diarios.component.html',
  styleUrls: ['./crud-avances-diarios.component.scss'],
})
export class CrudAvancesDiariosComponent implements OnInit {


  fechaNaci : Date = new Date();

  @Input() avances:Avances;

  avancesD : AvancesDiarios[]=[];
  
  newIAvancesD: AvancesDiarios;

  constructor(private authService: AuthService,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
    private interactionService: InteractionService,
    private database: FirestoreService,
    private firestorageService: FirestorageService,
    private modalController:ModalController) { }

  ngOnInit() {
    this.loadProyecto();
  }
  loadProyecto(){
    const path = 'AvancesDiarios';
this.database.getCollection<AvancesDiarios>(path).subscribe(res =>{
  if(res){
    this.avancesD = res;
  }
})
  }

  addNew(){

    this.newIAvancesD={
      
      porcentaje: '',
      fechaI: null ,
      id:this.database.getId()
    
    
    
    
    }

  }


  
    async guardar(){
      await this.interactionService.presentLoading('guardando...');
      console.log('guardar ->', this.newIAvancesD);
      const path = 'Avances/' + this.avances.id+'/AvancesDiarios/';
      await this.database.createDoc(this.newIAvancesD, path, this.newIAvancesD.id );
      this.interactionService.presentToast('guardado con exito');
      this.interactionService.closeLoading();
     }
   

   cerrar(){
    this.modalController.dismiss();
       }

}
