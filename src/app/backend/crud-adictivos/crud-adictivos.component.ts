import { Component, OnInit } from '@angular/core';
import { materialM, rentaM, trabajoM, Aditivo, Proyecto } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AlertController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-crud-adictivos',
  templateUrl: './crud-adictivos.component.html',
  styleUrls: ['./crud-adictivos.component.scss'],
})
export class CrudAdictivosComponent implements OnInit {


  aditivo:Aditivo[]=[];

  newIaditivo:Aditivo ;

material=materialM;
renta=rentaM;
trabajo=trabajoM;


proyectow : Proyecto[]=[];




selectProyecto:string ='';



  constructor(private authService: AuthService,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
    private interactionService: InteractionService,
    private database: FirestoreService) { }

  ngOnInit() {

    this.loadProyecto();
    this.getProyecto();
  }

  getProyecto(){
    const path='Proyecto';
    this.firestoreService.getCollection<Proyecto>(path).subscribe(res=>{
this.proyectow=res;
    });
  }
  addNew(){
    this.newIaditivo ={
      nombrePr:null,
      material:null,
      renta:null,
      trabajo:null,
      costoT:null,
      id:this.database.getId()
    }
      }


  loadProyecto(){
    const path = 'Aditivos';
this.database.getCollection<Aditivo>(path).subscribe(res =>{
  if(res){
    this.aditivo = res;
  }
})
  }

  async guardar(){
    await this.interactionService.presentLoading('guardando...');
 console.log('guardar ->', this.newIaditivo);
 const path = 'Aditivos';
 await this.database.createDoc(this.newIaditivo, path, this.newIaditivo.id );
 this.interactionService.presentToast('guardado con exito');
 this.interactionService.closeLoading();
   }


   editar(aditivo: Aditivo){
    console.log('editar', aditivo);
    this.newIaditivo= aditivo;
    
      }
    
      async eliminar(aditivo: Aditivo){
        const res =  await this.interactionService.presentAlert('alerta', 'seguro que deseas eliminar');
        console.log('respues->', res);
        if(res){
          const path = 'Aditivos';
         await this.database.deleteDoc(path, aditivo.id);
         this.interactionService.presentToast('Eliminado con exito');
        }
      
      
        }




}
