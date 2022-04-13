import { Component, OnInit } from '@angular/core';
import { Proyecto, Avances } from '../../models/models';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-verproyectos',
  templateUrl: './verproyectos.component.html',
  styleUrls: ['./verproyectos.component.scss'],
})
export class VerproyectosComponent implements OnInit {

  resultados : Avances[]=[];


  constructor(private database: FirestoreService ) {

    
   }

  ngOnInit() {
    this.getResultado();
  }


  getResultado(){
    const path='Avances';
    this.database.getCollection<Avances>(path).subscribe(res=>{
      console.log('esta es la lectura',res);
      this.resultados=res;
    })
  }


}
