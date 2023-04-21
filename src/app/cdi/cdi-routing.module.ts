import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdiComponent } from './cdi/cdi.component';
import { AuthGuard } from '../seguranca/auth.guard';
import { PacintComponent } from './pacint/pacint.component';
import { ExamesimgComponent } from './examesimg/examesimg.component';

const routes: Routes = [
  {
    path: '',
    component: PacintComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CDI']}
},

{
  path: 'pacex',
  component: ExamesimgComponent,
  canActivate: [AuthGuard],
  data: {roles: ['ROLE_CDIX']}
},
{
  path: 'pacex/:nr_atendimento',
  component: ExamesimgComponent,
  canActivate: [AuthGuard],
  data: {roles: ['ROLE_CDIX']}
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdiRoutingModule { }
