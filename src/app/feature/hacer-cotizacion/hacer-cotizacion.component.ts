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

  options: any = {format: 'DD/MM/YYYY HH:mm', buttons: {showClear: false}};
  date = null;

  public mostrarAgendas = false;
  public mostrarArtistasDisponibles = false;
  public mensajeError: any;
  public mensajeExito: string;

  cotizacionForm: FormGroup;
  cotizacion: any[];
  artistas: any[];

  constructor(private cliente: ClienteGeneralService) {
    this.cotizacionForm = new FormGroup({});
    this.cotizacion = [];
    this.artistas = [];
  }
  ngOnInit() {
    const test = moment.defaultFormatUtc;
    console.log(test);
    const fechaActual = moment(new Date(), 'YYYY/MM/DD HH:mm').minutes(0).seconds(0).milliseconds(0).utc(true);
    //this.date = fechaActual;
    this.options.minDate = fechaActual;
  }

  obtenerValor(form: { value: any; }) {
    this.mensajeExito = undefined;
    this.mensajeError = undefined;
    this.cliente.postAny('/cotizacion/generar', form.value).subscribe(
      (data: any[]) => {
        this.cotizacion = data;
        this.mostrarAgendas = true;
      },
      (error) => {
        this.mensajeError = (error.error.message || error.message || 'Error interno de servidor');
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }

  limpiar(limpiarExito: boolean) {
    this.cotizacionForm.reset();
    this.mostrarAgendas = false;
    this.mostrarArtistasDisponibles = false;
    //this.date = moment(new Date(), 'YYYY/MM/DD HH:mm').minutes(0).seconds(0).milliseconds(0).utc(true);
    this.cotizacion = [];
    if (limpiarExito) {
      this.mensajeExito = undefined;
    }
    this.mensajeError = undefined;
  }

  consultarArtistasDisponibles(form: { value: any; }) {
    this.mensajeExito = undefined;
    this.mensajeError = undefined;
    this.cliente.postAny('/artistas/consultar-artistas-disponibles', form.value).subscribe(
      (data: any[]) => {
        this.artistas = data;
        this.mostrarArtistasDisponibles = true;
      },
      (error) => {
        this.mensajeError = (error.error.message || error.message || 'Error interno de servidor');
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }

  agendarCita(form: { value: { fechaInicio: { format: string; }; }; }) {
    this.mensajeError = undefined;
    this.cliente.postAny('/appointment/crear-cita', form.value).subscribe(
      (data: any[]) => {
        this.artistas = data;
        this.mensajeExito = 'Se ha creado de manera exitosa su cita.';
        this.limpiar(false);
      },
      (error) => {
        this.mensajeError = (error.error.message || error.message || 'Error interno de servidor');
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }
}
