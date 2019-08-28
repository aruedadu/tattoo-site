import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreRoutingModule } from './core-routing.module';
import { AgendarCitaRoutingModule } from '../feature/agendar-cita/agendar-cita-routing.module';
import { AgendarCitaComponent } from '../feature/agendar-cita/agendar-cita.component';
import { HacerCotizacionRoutingModule } from '../feature/hacer-cotizacion/hacer-cotizacion-routin.module';
import { HacerCotizacionComponent } from '../feature/hacer-cotizacion/hacer-cotizacion.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgTempusdominusBootstrapModule } from 'src/tempus/ng-tempusdominus-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteGeneralService } from './cliente-general.service';

@NgModule({
  declarations: [
    CoreComponent,
    DashboardComponent,
    NavbarComponent,
    AgendarCitaComponent,
    HacerCotizacionComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AgendarCitaRoutingModule,
    HacerCotizacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgTempusdominusBootstrapModule,
    HttpClientModule
  ],
  exports: [CoreComponent],
  providers: [ClienteGeneralService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CoreModule { }
