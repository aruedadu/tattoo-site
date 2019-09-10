import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClienteGeneralService } from 'src/app/core/cliente-general.service';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.scss']
})
export class ModificarCitaComponent implements OnInit {

  elements: any;
  citasForm: FormGroup;
  public mensajeError: string;
  public mensajeExito: string;
  public mensajeAlerta: string;

  public radioSelected: any;

  constructor(
    private cliente: ClienteGeneralService
  ) {
    this.citasForm = new FormGroup({});
    this.elements = [];
  }

  ngOnInit() {
  }

  reiniciarMensajes() {
    this.mensajeAlerta = undefined;
    this.mensajeError = undefined;
    this.mensajeExito = undefined;
  }

  consultarCitas(form: { value: any; }) {
    this.reiniciarMensajes();
    this.cliente.postAny('/appointment/consultar-todas-citas', form.value).subscribe(
      (data: any[]) => {
        this.elements = data['citas'];
        if (data['citas'].length === 0) {
          this.mensajeAlerta = 'Usted no posee ninguna cita agendada.';
        }
      },
      (error) => {
        this.mensajeError = (error.error.message || error.message || 'Error interno de servidor');
        console.log(error || 'Error interno de servidor');
      }
    );
  }

  cancelarCita() {
    this.reiniciarMensajes();

    this.cliente.postAny('/appointment/cancelar-cita', {
      id: +this.radioSelected
    }).subscribe(
      (data: any[]) => {
        this.mensajeExito = 'Su cita se ha cancelado de manera exitosa';
        this.removerCita(+this.radioSelected);
      },
      (error) => {
        this.mensajeError = (error.error.message || error.message || 'Error interno de servidor');
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }

  removerCita(index: number) {
    const removeIndex = this.elements.map( (item: { id: any; }) =>  item.id ).indexOf(index);
    this.elements.splice(removeIndex, 1);
  }

}
