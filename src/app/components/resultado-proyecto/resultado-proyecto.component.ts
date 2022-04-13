import { Component, OnInit, Input } from '@angular/core';
import { Proyecto, Avances } from '../../models/models';
import { ModalController } from '@ionic/angular';
import { ProyectoComponent } from '../../backend/proyecto/proyecto.component';
import { ResultadoSemanasComponent } from '../resultado-semanas/resultado-semanas.component';
import { CrudAvancesDiariosComponent } from '../../backend/crud-avances-diarios/crud-avances-diarios.component';
import { DetallesAvancesComponent } from '../detalles-avances/detalles-avances.component';

@Component({
  selector: 'app-resultado-proyecto',
  templateUrl: './resultado-proyecto.component.html',
  styleUrls: ['./resultado-proyecto.component.scss'],
})
export class ResultadoProyectoComponent implements OnInit {

  @Input() resultados: Avances;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log('el input es ',this.resultados);
  }


  async detalles(){
    const modal = await this.modalController.create({
      component: CrudAvancesDiariosComponent,
      componentProps:{avances: this.resultados}
    });
    return await modal.present();
  }

  async informacion() {
    const modal = await this.modalController.create({
      component: DetallesAvancesComponent,
      componentProps:{resultado: this.resultados}
    });
    return await modal.present();
  }
}
