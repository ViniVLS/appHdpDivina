import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './cep-routing.module';
import { TreinamentoComponent } from './treinamento/treinamento.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ButtonModule } from 'primeng/components/button/button';
import { InputText, InputTextModule } from 'primeng/components/inputText/inputText';
import { DataTableModule } from 'primeng/datatable';

@NgModule({
  declarations: [TreinamentoComponent],
  imports: [
    CepRoutingModule,
    CommonModule,
    ButtonModule,
    FormsModule ,
    InputTextModule,
    DataTableModule
  ]
})
export class CepModule { }
