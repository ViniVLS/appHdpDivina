 import { FlashComponent } from './flash/flash.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { AgendaDetalheComponent } from './agenda/agenda-detalhe/agenda-detalhe.component';
import { PacienteComponent } from './paciente/paciente/paciente.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './seguranca/auth.guard';
import { ResumoComponent } from './paciente/resumo/resumo.component';
import { PasswdComponent } from './seguranca/passwd/passwd.component';
import { RepasseComponent } from './repasse/repasse.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { FaleComponent } from './faleconosco/fale/fale.component';
import { RespostaComponent } from './faleconosco/resposta/resposta.component';
import { CrmComponent } from './faleconosco/crm/crm.component';
import { GrupoComponent } from './paciente/grupo/grupo.component';
import { AplicacaoComponent } from './medicinia/aplicacao/aplicacao.component';
 import { OcupacaoComponent } from './ocupacao/ocupacao.component';
 import { OcpaComponent } from './ocpa/ocpa.component';
import { SetorComponent } from './paciente/setor/setor.component';
import { ItensComponent } from './repasse/itens/itens.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { CoremanejoComponent } from './paciente/coremanejo/coremanejo.component';
import { AvalespecialistaComponent } from './paciente/avalespecialista/avalespecialista.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PacprotComponent } from './paciente/pacprot/pacprot.component';
import { ChamadoComponent } from './leito/chamado/chamado.component';




const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},

  { path: 'cclinico', loadChildren: 'app/cclinico/cclinico.module#CclinicoModule'},

  { path: 'agendac', loadChildren: 'app/agenda-cirurgica/agenda-cirurgica.module#AgendaCirurgicaModule'},
  
  { path: 'cdi', loadChildren: 'app/cdi/cdi.module#CdiModule'},

  { path: 'cep', loadChildren: 'app/cep/cep.module#CepModule'},    

  { path: 'pahe', loadChildren: 'app/pahe/pahe.module#PaheModule'},   

  { path: 'painel', loadChildren: 'app/ppainel/ppainel.module#PpainelModule#'},  
 

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,
   canActivate: [AuthGuard]},

  { path: 'agenda', component: AgendaComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'detalhe', component: AgendaDetalheComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'paciente', component: PacienteComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'resumo/:codigo', component: ResumoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'passwd', component: PasswdComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_GERAL']}},

  { path: 'repasse', component: RepasseComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'repasse/itens/:codigo', component: ItensComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'faleconosco', component: FaleComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'crm', component: CrmComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CRM']}},

  { path: 'grupopaciente', component: GrupoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'forgot', component: ForgotComponent},


  { path: 'comunicacao/:codigo', component: RespostaComponent},

  { path: 'appaplic/:codigo', component: AplicacaoComponent},

  { path: 'appaplic', component: AplicacaoComponent},

  { path: 'leito', component: ChamadoComponent},

  { path: 'ocupacao', component: OcupacaoComponent},

   { path: 'ocupacao', component: OcupacaoComponent},

  { path: 'flash', component: FlashComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_FLASH']}},

  { path: 'ocpa', component: OcpaComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_PA']}},

  { path: 'setor/:codigo', component: SetorComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_OC']}},

{ path: 'cadastro', component: CadastroComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_ADM']}},

  { path: 'coremanejo', component: CoremanejoComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'aval', component: AvalespecialistaComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA']}},

  { path: 'pacprot', component: PacprotComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_CONSULTA','ROLE_OC']}},

  
  { path: '**', redirectTo: 'login'}
];





@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
