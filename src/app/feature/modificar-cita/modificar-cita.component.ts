import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClienteGeneralService } from 'src/app/core/cliente-general.service';

@Component({
  selector: 'app-modificar-cita',
  templateUrl: './modificar-cita.component.html',
  styleUrls: ['./modificar-cita.component.scss']
})
export class ModificarCitaComponent implements OnInit {

  elements;
  citasForm: FormGroup;

  public radioSelected: any;

  constructor(
    private cliente: ClienteGeneralService
  ) {
    this.citasForm = new FormGroup({});
  }

  ngOnInit() {
  }

  consultarCitas(form: { value: any; }) {
    console.log(JSON.stringify(form.value));
    this.cliente.postAny('/appointment/consultar-todas-citas', form.value).subscribe(
      (data: any[]) => {
        console.log(JSON.stringify(data));
        this.elements = data['citas'];
      },
      (error) => {
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }

  cancelarCita() {
    console.log(this.radioSelected);
    this.cliente.postAny('/appointment/cancelar-cita', {
      id: +this.radioSelected
    }).subscribe(
      (data: any[]) => {
        //TODO: PONER MENSAJE DE EXITO Y RECARGAR LA LISTA :D
      },
      (error) => {
        console.log(error.error.message || error.error || 'Error interno de servidor');
      }
    );
  }

}
