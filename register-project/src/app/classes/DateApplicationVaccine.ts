export class DateApplicationVaccine {
  private date: string;

  constructor(date: string) {
    this.date = date;
  }

  getDay(): string {
    return this.date.substring(0, 2);
  }

  getMonth(): string{
    return this.date.substring(3, 5);
  }

  getYear(): string {
    debugger
    return this.date.substring(6, 10);
  }

  convertDateToISOFormat() {
    let newDate = this.getYear + '-' + this.getMonth + '-' + this.getDay;
    return newDate;
  }

  checkLeapYear(){
    debugger
    if(parseInt(this.getYear()) % 100 == 0 && parseInt(this.getYear()) % 400 == 0) {
      return true
    } else if(parseInt(this.getYear()) % 100 != 0 && parseInt(this.getYear()) % 4 == 0) {
      return true
    } else {
      return false
    }
  }

  getDate(): string {
    return this.date;
  }

  setDate(newDate: string): void {
    this.date = newDate;
  }

}
