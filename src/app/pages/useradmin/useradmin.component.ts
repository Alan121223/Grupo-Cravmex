import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import {RegistroComponent} from '../registro/registro.component';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.scss'],
})
export class UseradminComponent implements OnInit {

  registrados: UserI[]=[];
  registradoss: UserI;
private path = 'Usuarios/';
  constructor(public firestoreService: FirestoreService,
    private router: Router
    ) { 
      // const datos= RegistroComponent.datos;
    }

  ngOnInit() {

    this.vistaUser();
  }



  vistaUser()
  {
this.firestoreService.getCollection<UserI>(this.path).subscribe(res=>{

console.log(res);
this.registrados = res; 


});


  }

  redirect(){

this.router.navigate(['/registro'])

  }
  deleteUser(registrados:UserI){


    this.firestoreService.deleteDoc(this.path, registrados.uid);
  }
}
