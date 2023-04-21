import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaCirurgicaComponent } from './agenda-cirurgica/agenda-cirurgica.component';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AgendaCirurgicaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_OC']}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaCirurgicaRoutingModule { }
