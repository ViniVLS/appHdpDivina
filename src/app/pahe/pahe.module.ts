import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaheRoutingModule } from './pahe-routing.module';
import { PaComponent } from './pa/pa.component';
import { ButtonModule } from 'primeng/components/button/button';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/components/ProgressSpinner/ProgressSpinner';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import { DataxPipe } from '../datax.pipe';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

@NgModule({
  declarations: [PaComponent],
  imports: [
    CommonModule,
    PaheRoutingModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    SelectButtonModule,
    FormsModule,
    ProgressSpinnerModule,
    TableModule,
    DataTableModule,
    TooltipModule
  ]
})
export class PaheModule { }
