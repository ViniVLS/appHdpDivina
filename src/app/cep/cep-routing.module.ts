import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { TreinamentoComponent } from './treinamento/treinamento.component';

const routes: Routes = [
  {
    path: '',
    component: TreinamentoComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CEP']}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule { }
