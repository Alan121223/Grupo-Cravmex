import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { FirestoreService } from '../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  login : boolean =false;

  rol:'visitante'|'admin' = null;



  constructor( public popoverController: PopoverController,
    private auth  : AuthService,
    private interaction: InteractionService,
    private firestore: FirestoreService,
    private router :Router) { }

  ngOnInit() {}



  loginApp() {
    this.login = true;
}
logout() {
  this.auth.logut();
  this.interaction.presentToast('sesion finalizada');
  this.router.navigate(['/login'])

}

}
