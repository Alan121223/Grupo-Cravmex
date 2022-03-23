import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';
import { UserI } from '../../models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    
  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;

  constructor(public popoverController: PopoverController,
              private auth  : AuthService,
              private interaction: InteractionService,
              private firestore: FirestoreService,
              private router :Router) { 

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

  ngOnInit() {}
  
  loginApp() {
    this.login = true;
}

logout() {
    this.auth.logut();
    this.interaction.presentToast('sesion finalizada');
    this.router.navigate(['/login'])

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
