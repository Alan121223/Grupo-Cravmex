import { Component, Input, OnInit } from '@angular/core';
import { GatosDiarios, Gastos } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AlertController, ModalController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-crud-gastos-diarios',
  templateUrl: './crud-gastos-diarios.component.html',
  styleUrls: ['./crud-gastos-diarios.component.scss'],
})
export class CrudGastosDiariosComponent implements OnInit {

@Input() gastos:Gastos;

  fechaNaci : Date = new Date();

  gastosD : GatosDiarios[]=[];
  
  newIgastos: GatosDiarios;
  private path = 'Productos/';


  newImage = '';
  newFile: any;

loading:any;


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
    const path = 'GastosDiarios';
this.database.getCollection<GatosDiarios>(path).subscribe(res =>{
  if(res){
    this.gastosD = res;
  }
})
  }


  addNew(){

    this.newIgastos={
      
      descripcion: '',
      monto: null ,
      fecha:null,
      foto:null,
      id:this.database.getId()
    
    
    
    
    }

  }
  
  async guardar(){
    await this.interactionService.presentLoading('guardando...');
    //const path = 'Productos';
    const path = 'Gastos/' + this.gastos.id+'/GastosDiarios/';
    const name = this.newIgastos.descripcion;
    if (this.newFile !== undefined) {
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.newIgastos.foto = res;
    
    }
      
      
        await this.database.createDoc(this.newIgastos, path, this.newIgastos.id ) ;
          this.interactionService.presentToast('guardado con exito');
        this.interactionService.closeLoading();
  
       }

   async newImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
            this.newIgastos.foto = image.target.result as string;
        });
        reader.readAsDataURL(event.target.files[0]);
      }

        }

   cerrar(){
this.modalController.dismiss();
   }

}
