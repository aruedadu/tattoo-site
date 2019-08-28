import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HacerCotizacionComponent } from './hacer-cotizacion/hacer-cotizacion.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgTempusdominusBootstrapModule } from 'src/tempus/ng-tempusdominus-bootstrap.module';

@NgModule({
  declarations: [
    HacerCotizacionComponent,
    AgendarCitaComponent,
    ModificarCitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule
  ]
})
export class FeatureModule { }
