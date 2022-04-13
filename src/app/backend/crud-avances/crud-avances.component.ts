import { Component, OnInit } from '@angular/core';
import { Proyecto, Avances } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AlertController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-crud-avances',
  templateUrl: './crud-avances.component.html',
  styleUrls: ['./crud-avances.component.scss'],
})
export class CrudAvancesComponent implements OnInit {


  avances : Avances[]=[];

newIAvances: Avances;


 

proyectow : Proyecto[]=[];




selectProyecto:string ='';

  constructor(private authService: AuthService,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
    private interactionService: InteractionService,
    private database: FirestoreService) { }

  ngOnInit() {

    this.getProyecto();
    this.loadProyecto();
    
  }

  getProyecto(){
    const path='Proyecto';
    this.firestoreService.getCollection<Proyecto>(path).subscribe(res=>{
this.proyectow=res;
    });
  }

  addNew(){
    this.newIAvances ={
      nombrePr:null,
      avance:null,
      id:this.database.getId()
    }
      }

      loadProyecto(){
        const path = 'Avances';
    this.database.getCollection<Avances>(path).subscribe(res =>{
      if(res){
        this.avances = res;
      }
    })
      }


      async guardar(){
        await this.interactionService.presentLoading('guardando...');
     console.log('guardar ->', this.newIAvances);
     const path = 'Avances';
     await this.database.createDoc(this.newIAvances, path, this.newIAvances.id );
     this.interactionService.presentToast('guardado con exito');
     this.interactionService.closeLoading();
       }
    
    
       editar(avances: Avances){
        console.log('editar', avances);
        this.newIAvances= avances;
        
          }
        
          async eliminar(avances: Avances){
            const res =  await this.interactionService.presentAlert('alerta', 'seguro que deseas eliminar');
            console.log('respues->', res);
            if(res){
              const path = 'Gastos';
             await this.database.deleteDoc(path, avances.id);
             this.interactionService.presentToast('Eliminado con exito');
            }
          
          
            }



}
