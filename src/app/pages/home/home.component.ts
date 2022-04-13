import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../../components/menu/menu.component';
import { UserI } from '../../models/models';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { FirestoreService } from '../../services/firestore.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;
status:string
  constructor(public popoverController: PopoverController,
    private auth  : AuthService,
    private interaction: InteractionService,
    private firestore: FirestoreService,) {this.auth.stateUser().subscribe(res =>{
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
  async openMenu(ev: any) {
    console.log('abrir menu lateral');    
    const menu = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev,
    });
    await menu.present();

    //-------------------------------------------
    
  }


  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
        console.log('datos -> ', res);
        if (res) {
           this.rol= res.perfil
          this.status=res.status
        }
    })
    
  }
  }