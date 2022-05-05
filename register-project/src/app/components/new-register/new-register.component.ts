import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.scss'],
})
export class NewRegisterComponent implements OnInit {
  charactersDate: Array<string> = [];
  validKeyCodesToDate: Array<string> = [''];
  showToastValidationsCharactersToDate: boolean = false;
  dateApplicationVaccine: string = '';
  vaccineSelected: string = 'Selecione uma Vacina';
  vaccineOptions: Array<string> = [
    'Pfizer/Biontech',
    'CoronaVac',
    'Johnson & Johnson',
    'Oxford/AstraZeneca',
  ];

  constructor(private registerService: RegisterService) {

  }

  ngOnInit(): void {}

  setDateApplicationVaccine(keyPressioned: KeyboardEvent) {

    let dateVaccineApplicationArray = this.dateApplicationVaccine.split('');

    dateVaccineApplicationArray.forEach((character) => {
      if(character != '/' && isNaN(parseInt(character))) {
        console.log("E  agora tabacudo")
      } else if (
          this.dateApplicationVaccine.length == 2 &&
          keyPressioned.key != 'Backspace'
        ) {
          this.dateApplicationVaccine += '/';
        } else if (
          this.dateApplicationVaccine.length == 5 &&
          keyPressioned.key != 'Backspace'
        ) {
          this.dateApplicationVaccine += '/';
        }
      }
    )
    // if(isNaN(parseInt(keyPressioned.key)) && keyPressioned.key != 'Backspace'){
    //   console.log('ERROOOOR')
    // }
  }

  verifyDateFormat(): void{
    debugger
    let dateFormateIsValid = this.registerService.verifyDateFormat(this.dateApplicationVaccine);

    if(dateFormateIsValid){
      window.alert('VAI DORMIR TABACUDO');
    }
  }
}
