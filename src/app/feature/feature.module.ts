import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HacerCotizacionComponent } from './hacer-cotizacion/hacer-cotizacion.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita.component';

@NgModule({
  declarations: [HacerCotizacionComponent, AgendarCitaComponent, ModificarCitaComponent],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
