import { Injectable } from '@angular/core';
import { DateApplicationVaccine } from '../classes/DateApplicationVaccine';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {

  }

  verifyDateFormat(date: string): boolean {
    debugger
    let newDate = new DateApplicationVaccine(date);
    if(!newDate.checkLeapYear()) {
      if(parseInt(newDate.getMonth()) == 2 && parseInt(newDate.getDay()) > 28) {
       return true
      } else if(Date.parse(newDate.convertDateToISOFormat())){
        return true
      } else {
        return false
      }
      }
    } else if(Date.parse(newDate.convertDateToISOFormat())){
      return true
    } else {
      return false
    }
  }
}
