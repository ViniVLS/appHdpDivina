import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { PaComponent } from './pa/pa.component';

const routes: Routes = [
  {
    path: '',
    component: PaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CDI']}
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PpainelRoutingModule { }
