import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/models';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { InteractionService } from '../../services/interaction.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss'],
})
export class UseradminComponent implements OnInit {

 // registrados: UserI[]=[];
 registrados: any = [];
 searchedUser: any;
 login : boolean =false;

 // rol: 'visitante' | 'admin'= null;
 rol: string;

 // registradoss: UserI;
private path = 'Usuarios/';
 constructor(public firestoreService: FirestoreService,
  private router: Router, private auth: AuthService,
  public alertController: AlertController,
  private interactionService: InteractionService,
  private database: FirestoreService) { this.firestoreService.getCollection<UserI>(this.path).subscribe(res=>{

     console.log(res);
     this.registrados = res; 
     this.searchedUser = this.registrados; 
     
     }
     );
     // const datos= RegistroComponent.datos;
   }

 ngOnInit() {

   this.searchedUser = this.registrados;
   
   
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


 searchCustomer(event){
   const text = event.target.value;
   this.searchedUser = this.registrados;
   if(text && text.trim() != ''){
     this.searchedUser = this.searchedUser.filter((registrados: any)=>{
       return (registrados.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
      

     })
   }
   
 }



 redirect(){

this.router.navigate(['/registro'])

 }
 deleteUser(registrados:UserI){


   this.firestoreService.deleteDoc(this.path, registrados.uid);
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

//Guardar Editor

async guardar(){
  await this.interactionService.presentLoading('guardando...');
console.log('guardar ->', this.searchedUser);
const path = 'Usuarios';
await this.database.createDoc(this.registrados, path, this.registrados.uid );
this.interactionService.presentToast('guardado con exito');
this.interactionService.closeLoading();
 }

 //editar

 editar(registrado: UserI){
  console.log('editar', registrado);
  this.registrados= registrado;
  
    }


}


