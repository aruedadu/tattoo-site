import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreComponent } from './core.component';
import { HacerCotizacionComponent } from '../feature/hacer-cotizacion/hacer-cotizacion.component';
import { ModificarCitaComponent } from '../feature/modificar-cita/modificar-cita.component';
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
              path: 'asignar-cita',
              component: HacerCotizacionComponent
            },
            {
              path: 'operaciones-cita',
              component: ModificarCitaComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
