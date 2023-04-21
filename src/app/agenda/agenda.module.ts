import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';


import { DataTableModule } from 'primeng/components/datatable/datatable';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {InputTextModule} from 'primeng/components/inputText/inputText';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    DataTableModule,
    CalendarModule,
    InputTextModule
  ],
  declarations: [AgendaComponent]
})
export class AgendaModule { }
