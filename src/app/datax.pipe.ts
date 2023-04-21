import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datax'
})
export class DataxPipe implements PipeTransform {

  transform(date: any, format: any): any {
    moment.locale('pt'); 
    return moment(date).format(format);
  }

}
