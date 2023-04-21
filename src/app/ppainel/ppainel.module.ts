import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpainelRoutingModule } from './ppainel-routing.module';
import { PaComponent } from './pa/pa.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';

@NgModule({
  declarations: [PaComponent],
  imports: [
    CommonModule,
    PpainelRoutingModule,
    DataTableModule
  ]
})
export class PpainelModule { }
