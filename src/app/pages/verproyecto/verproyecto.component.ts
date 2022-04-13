import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Proyecto, UserI } from '../../models/models';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-verproyecto',
  templateUrl: './verproyecto.component.html',
  styleUrls: ['./verproyecto.component.scss'],
})
export class VerproyectoComponent implements OnInit {

  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;


  proyecto : Proyecto[]=[];

  constructor(public popoverController: PopoverController,
    private auth :AuthService,
    private interaction: InteractionService,
    private database: FirestoreService,
    private router :Router) {this.auth.stateUser().subscribe(res =>{
    if (res){
      console.log('estas logeado');
      this.getDatosUser(res.uid)
      this.login=true;
    }else{
      console.log('no estas logeado');
      this.login=false;
    }
  }) }

  ngOnInit() {
    this.getResultados();
  }

  getResultados(){

    const path = 'Proyecto';
    this.database.getCollection<Proyecto>(path).subscribe(res =>{
      console.log('Esta es la collection',res);
      this.proyecto = res;
    })
  }
  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.database.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
           this.rol= res.perfil
        }
    })
    
  }

}