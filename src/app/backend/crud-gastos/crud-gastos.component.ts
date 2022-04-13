import { Component, OnInit } from '@angular/core';
import { Gastos, Proyecto } from '../../models/models';
import { FirestoreService } from '../../services/firestore.service';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-crud-gastos',
  templateUrl: './crud-gastos.component.html',
  styleUrls: ['./crud-gastos.component.scss'],
})
export class CrudGastosComponent implements OnInit {

  fechaNaci : Date = new Date();

  gastos : Gastos[]=[];

newImoney: Gastos;


 

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
    this.newImoney ={
      nombrePr:null,
      semana:null,
      fechaE:null,
      fechaF:null,
      id:this.database.getId()
    }
      }

  loadProyecto(){
    const path = 'Gastos';
this.database.getCollection<Gastos>(path).subscribe(res =>{
  if(res){
    this.gastos = res;
  }
})
  }

  
  async guardar(){
    await this.interactionService.presentLoading('guardando...');
 console.log('guardar ->', this.newImoney);
 const path = 'Gastos';
 await this.database.createDoc(this.newImoney, path, this.newImoney.id );
 this.interactionService.presentToast('guardado con exito');
 this.interactionService.closeLoading();
   }


   editar(gastos: Gastos){
    console.log('editar', gastos);
    this.newImoney= gastos;
    
      }
    
      async eliminar(gastos: Gastos){
        const res =  await this.interactionService.presentAlert('alerta', 'seguro que deseas eliminar');
        console.log('respues->', res);
        if(res){
          const path = 'Gastos';
         await this.database.deleteDoc(path, gastos.id);
         this.interactionService.presentToast('Eliminado con exito');
        }
      
      
        }





}
