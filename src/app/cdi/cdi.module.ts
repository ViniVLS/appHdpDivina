import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdiRoutingModule } from './cdi-routing.module';
import { ButtonModule } from 'primeng/components/button/button';
import { CdiComponent } from './cdi/cdi.component';
import { PacintComponent } from './pacint/pacint.component';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/components/ProgressSpinner/ProgressSpinner';
import { ExamesimgComponent } from './examesimg/examesimg.component';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { DataxPipe } from '../datax.pipe';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';






@NgModule({
  declarations: [CdiComponent, PacintComponent, ExamesimgComponent,DataxPipe],
  imports: [
    CommonModule,
    CdiRoutingModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    SelectButtonModule,
    FormsModule ,
    ProgressSpinnerModule,
    TableModule,
    DataTableModule,
    TooltipModule
  ]
})
export class CdiModule { }
