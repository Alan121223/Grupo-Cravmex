import { Component, OnInit } from '@angular/core';
import { Gastos, UserI } from '../../models/models';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-versemanas',
  templateUrl: './versemanas.component.html',
  styleUrls: ['./versemanas.component.scss'],
})
export class VersemanasComponent implements OnInit {

  resultados : Gastos[]=[];

  login : boolean =false;

  // rol: 'visitante' | 'admin'= null;
  rol: string;


  constructor(private database: FirestoreService,
    private firestore: FirestoreService ) {

    
   }

  ngOnInit() {
    this.getResultado();
  }


  getResultado(){
    const path='Gastos';
    this.database.getCollection<Gastos>(path).subscribe(res=>{
      console.log('esta es la lectura',res);
      this.resultados=res;
    })
  }

 
}
