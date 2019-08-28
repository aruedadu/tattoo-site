import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteGeneralService } from 'src/app/core/cliente-general.service';

@Component({
  selector: 'app-hacer-cotizacion',
  templateUrl: './hacer-cotizacion.component.html',
  styleUrls: ['./hacer-cotizacion.component.scss']
})
export class HacerCotizacionComponent implements OnInit {

  options = {format: 'DD/MM/YYYY HH:mm', buttons: {showClear: false}};
  date = null;
  cotizacionForm: FormGroup;
  cotizacion: any[];
  constructor(private cliente: ClienteGeneralService) {
    this.cotizacionForm = new FormGroup({});
    this.cotizacion = [];
  }
  ngOnInit() {
    const test = moment.defaultFormatUtc;
    console.log(test);
    this.date = moment(new Date(), 'YYYY/MM/DD HH:mm').utc(true);
  }

  obtenerValor(form) {
    this.cliente.postAny('/cotizacion/generar', form.value).subscribe(
      (data: any[]) => {
        this.cotizacion = data;
        JSON.stringify(this.cotizacion);
      }
    );
  }

}
