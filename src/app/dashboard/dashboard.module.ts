import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'primeng/components/common/shared';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';


@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    DashboardRoutingModule,
    ChartModule,
    PanelModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
