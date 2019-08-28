import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: CoreComponent
  },
  {
    path: '**',
    component: CoreComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
