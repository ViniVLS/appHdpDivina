import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaCirurgicaRoutingModule } from './agenda-cirurgica-routing.module';
import { AgendaCirurgicaComponent } from './agenda-cirurgica/agenda-cirurgica.component';
import {CardModule} from 'primeng/card';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { InputTextModule } from 'primeng/components/inputText/inputText';
import { DataTableModule } from 'primeng/components/datatable/datatable';


@NgModule({
  declarations: [AgendaCirurgicaComponent],
  imports: [
    CommonModule,
    AgendaCirurgicaRoutingModule,
    CardModule,
    CalendarModule,
    FormsModule,
    CoreModule,
    CalendarModule,
    InputTextModule,
    DataTableModule
  ]
})
export class AgendaCirurgicaModule { }
