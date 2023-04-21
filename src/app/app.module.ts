import { Http } from '@angular/http';
import { UsuarioService } from './usuario/usuario.service';
 import { FlashService } from './flash/flash.service';
 import { OcpaService } from './ocpa/ocpa.service';
 import { OcupacaoService } from './ocupacao/ocupacao.service';
import { MediciniaService } from './medicinia/medicinia.service';
import { FalaconoscoService } from './faleconosco/falaconosco.service';
import { NgModule, Component } from '@angular/core';

import { RepasseService } from './repasse/repasse.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CepService } from './core/cep.service';
import { BrowserModule } from '@angular/platform-browser';

import {SwPush,SwUpdate} from '@angular/service-worker';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';



import { AppComponent } from './app.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';



import { NavbarComponent } from './core/navbar/navbar.component';
import { LoginComponent } from './login/login/login.component';
import { AgendaDetalheComponent } from './agenda/agenda-detalhe/agenda-detalhe.component';
import { PacienteComponent } from './paciente/paciente/paciente.component';
import { PacienteService } from './paciente/paciente.service';
import { AgendaService } from './agenda/agenda.service';
import { AgendaModule } from './agenda/agenda.module';

import { AuthService } from './seguranca/auth.service';
import { CoreModule } from './core/core.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SegurancaModule } from './seguranca/seguranca.module';

import { GrowlModule } from 'primeng/growl'

import { DataTableModule } from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';

import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {DataViewModule} from 'primeng/dataview';

import {CalendarModule} from 'primeng/components/calendar/calendar';
import {InputTextModule} from 'primeng/components/inputText/inputText';
import { AgendaComponent } from './agenda/agenda/agenda.component';
import { ButtonModule } from 'primeng/components/button/button';
import { AppRoutingModule } from './app-routing.module';
import { ResumoComponent } from './paciente/resumo/resumo.component';
import { PanelModule } from 'primeng/components/panel/panel';
import { PasswdComponent } from './seguranca/passwd/passwd.component';
import { PasswdService } from './seguranca/passwd.service';
import { DialogModule } from 'primeng/components/Dialog/Dialog';
import { RepasseComponent } from './repasse/repasse.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import {CaptchaModule} from 'primeng/components/Captcha/Captcha';
import {EditorModule} from 'primeng/components/editor/editor';
import { FaleComponent } from './faleconosco/fale/fale.component';
import { RespostaComponent } from './faleconosco/resposta/resposta.component';
import { CrmComponent } from './faleconosco/crm/crm.component';
import { GrupoComponent } from './paciente/grupo/grupo.component';
import { AplicacaoComponent } from './medicinia/aplicacao/aplicacao.component';
 import { OcupacaoComponent } from './ocupacao/ocupacao.component';
import { LogoutService } from './seguranca/logout.service';
import { OcpaComponent } from './ocpa/ocpa.component';
 import { FlashComponent } from './flash/flash.component';
import { SetorComponent } from './paciente/setor/setor.component';
import { ItensComponent } from './repasse/itens/itens.component';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { MessageService } from 'primeng/components/common/messageservice';
import { CoremanejoComponent } from './paciente/coremanejo/coremanejo.component';
import { AvalespecialistaComponent } from './paciente/avalespecialista/avalespecialista.component';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptor } from './seguranca/jwt-http-interceptor';
import {CheckboxModule} from 'primeng/checkbox';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PacprotComponent } from './paciente/pacprot/pacprot.component';
import { ProgressSpinnerModule } from 'primeng/components/ProgressSpinner/ProgressSpinner';
import { TableModule } from 'primeng/table';
import { PaheModule } from './pahe/pahe.module';
import { ChamadoComponent } from './leito/chamado/chamado.component';
import { PpainelModule } from './ppainel/ppainel.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AgendaDetalheComponent,
    PacienteComponent,
    ResumoComponent,
    RepasseComponent,
    ForgotComponent,
    FaleComponent,
    RespostaComponent,
    CrmComponent,
    GrupoComponent,
    AplicacaoComponent,
     OcupacaoComponent,
   OcpaComponent,
    FlashComponent,
    SetorComponent,
    ItensComponent,
    CadastroComponent,
    CoremanejoComponent,
    AvalespecialistaComponent,
    PacprotComponent,
    ChamadoComponent
  
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SegurancaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    AgendaModule,
    GrowlModule,
    CoreModule,
    DataViewModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    AppRoutingModule,
    PanelModule,
    DialogModule,
    CurrencyMaskModule,
    CaptchaModule,
    EditorModule,
    SelectButtonModule,
    TooltipModule,
    CheckboxModule,
    DataViewModule,
    SelectButtonModule,
    FormsModule ,
    ProgressSpinnerModule,
    TableModule,
    DataTableModule,
    TooltipModule,
    PaheModule,
    PpainelModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
     ],
  // tslint:disable-next-line:max-line-length

  providers: [{provide: LocationStrategy,  useClass: HashLocationStrategy},   { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true } ,CepService, OcupacaoService ,FlashService,OcpaService, PacienteService, AgendaService, AuthService, JwtHelperService, PasswdService, RepasseService, FalaconoscoService, MediciniaService, LogoutService, UsuarioService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

  VAPID_PUBLIC_KEY = 'BNmSUbe4i_ac86Z8BpXsgZbCIBPODKrAxaEFF4NzHVOg2yFbSzYZAsWibf9ckBXT_69VkOi2BvWNcQnjz7VzRzU';
 
  constructor(private pushSw:SwPush,private update:SwUpdate){
    update.available.subscribe(update =>{
        console.log("Nova versão disponível");
      });
    
   this.SubscribeToPush();
      pushSw.messages.subscribe(msg =>{
        console.log(JSON.stringify(msg));
    })
 }

 SubscribeToPush(){
  this.pushSw.requestSubscription({
    serverPublicKey:this.VAPID_PUBLIC_KEY
  })
.then(pushSubscription => {
  console.log(JSON.stringify(pushSubscription));
})

.catch(err =>{
  console.error("Ocorreu um erro:"+ err);
})
}}

 
