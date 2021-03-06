import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HacerCotizacionComponent } from './hacer-cotizacion/hacer-cotizacion.component';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgTempusdominusBootstrapModule } from 'src/tempus/ng-tempusdominus-bootstrap.module';

@NgModule({
  declarations: [
    HacerCotizacionComponent,
    ModificarCitaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FeatureModule { }
