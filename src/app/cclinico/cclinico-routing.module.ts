import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CclinicoComponent } from './cclinico/cclinico.component';
import { AuthGuard } from '../seguranca/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CclinicoComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CCLINICO']}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CclinicoRoutingModule { }
