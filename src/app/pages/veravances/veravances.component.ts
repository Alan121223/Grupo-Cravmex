import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Proyecto, statusO, UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-veravances',
  templateUrl: './veravances.component.html',
  styleUrls: ['./veravances.component.scss'],
})
export class VeravancesComponent implements OnInit {

  data :any[]=[];

  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;

  

  fechaNaci : Date = new Date();

  proyecto : Proyecto[]=[];

newIproyects: Proyecto;

status = statusO;


  constructor(private authService: AuthService,
    private firestoreService: FirestoreService,
    public alertController: AlertController,
    private interactionService: InteractionService,
    private database: FirestoreService,private auth: AuthService,private firestore: FirestoreService) { }

  ngOnInit() {

    this.loadProyecto();

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


  addNew(){
    this.newIproyects={
      nombreP: '',
      fechaI: null,
      fechaF: null,
      encargadoP: null,
      maquinasT: null,
      monto: null,
      direccion: null, 
      status: null,
      id:this.database.getId()
    }


  }



  loadProyecto(){
    const path = 'Proyecto';
this.database.getCollection<Proyecto>(path).subscribe(res =>{
  if(res){
    this.proyecto = res;
  }
})
  }


  async guardar(){
    await this.interactionService.presentLoading('guardando...');
 console.log('guardar ->', this.newIproyects);
 const path = 'Proyecto';
 await this.database.createDoc(this.newIproyects, path, this.newIproyects.id );
 this.interactionService.presentToast('guardado con exito');
 this.interactionService.closeLoading();
   }


   editar(proyecto: Proyecto){
    console.log('editar', proyecto);
    this.newIproyects= proyecto;
    
      }
    
      async eliminar(proyecto: Proyecto){
        const res =  await this.interactionService.presentAlert('alerta', 'seguro que deseas eliminar');
        console.log('respues->', res);
        if(res){
          const path = 'Proyecto';
         await this.database.deleteDoc(path, proyecto.id);
         this.interactionService.presentToast('Eliminado con exito');
        }
      
      
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
