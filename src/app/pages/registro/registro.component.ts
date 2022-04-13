import { Component, OnInit } from '@angular/core';
import { UserI } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  ///
  data :any[]=[];

  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;


  datos: UserI = {
    nombre: null,
    apellido:null,
    correo: null,
    password: null,
    uid: null,
    telefono:null,
    status:null,
 
//
    perfil: null
  }

  constructor(private auth: AuthService,
    private firestore: FirestoreService,
    private interaction: InteractionService,
    private router: Router,
    ///
    private platform:Platform) { 

this.platform.ready().then(()=>{
  this.data=[{perfil:"Administrador"},{perfil:"Operador"}];
})

    }

    Onchange(event){
      alert("Seguro que quieres ser "+event.target.value+"?");
    }

  ngOnInit() {

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

  logout() {
    this.auth.logut();
    this.interaction.presentToast('sesion finalizada');
    this.router.navigate(['/login'])
}

  async registrar() {
    this.interaction.presentLoading('registrando...')
    console.log('datos -> ', this.datos);
    const res = await this.auth.registarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Faltan llenar datos o no existe el correo')
      console.log('error');
    })
    if (res) {
        console.log('exito al crear el usuario');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null
        await this.firestore.createDoc(this.datos, path, id)
        this.interaction.closeLoading();
        this.interaction.presentToast('registrado con exito');
        //registro
        this.auth.logut();
        this.interaction.presentToast('sesion finalizada');
    this.router.navigate(['/login'])
       
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
