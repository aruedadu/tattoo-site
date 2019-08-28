import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { AgendarCitaComponent } from '../feature/agendar-cita/agendar-cita.component';
import { HacerCotizacionComponent } from '../feature/hacer-cotizacion/hacer-cotizacion.component';
const coreRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            {
              path: '',
              component: DashboardComponent
            },
            {
              path: 'agendar-cita',
              component: AgendarCitaComponent
            },
            {
              path: 'hacer-cotizacion',
              component: HacerCotizacionComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
