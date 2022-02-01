import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  n1;
  n2;
  n3;
  n4;
  promedio;
  equivalente;
  calcular() {
    var n1 = parseInt(this.n1);
    var n2 = parseInt(this.n2);
    var n3 = parseInt(this.n3);
    var n4 = parseInt(this.n4);
    var promedio = this.promedio
    this.promedio = (n1 + n2 + n3 + n4) / 4;

    if (this.promedio>=0 && this.promedio<70) {
      this.equivalente = "F";
    } else if (this.promedio>=70 && this.promedio <=79) {
      this.equivalente = "C";
    } else if (this.promedio>=80 && this.promedio <= 89) {
      this.equivalente = "B";
    } else if (this.promedio>=90 && this.promedio <= 100) {
       this.equivalente="A"; 
      }
  }
}
