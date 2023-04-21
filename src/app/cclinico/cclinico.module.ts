import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CclinicoRoutingModule } from './cclinico-routing.module';
import { CclinicoComponent } from './cclinico/cclinico.component';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

@NgModule({
  declarations: [CclinicoComponent],
  imports: [
    CommonModule,
    CclinicoRoutingModule,
    DataTableModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    TooltipModule
  ]
})
export class CclinicoModule { }
