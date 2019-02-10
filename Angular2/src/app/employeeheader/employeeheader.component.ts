import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'employeeheader',
  templateUrl: './employeeheader.component.html',
  styleUrls: ['./employeeheader.component.css']
})
export class EmployeeheaderComponent {
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  selectedRadioButtonValue:string="All";
  
  @Output()
  countRadiobuttonSelectChanged=new EventEmitter<string>();

  onRadioButtonSelectChange(){
    this.countRadiobuttonSelectChanged.emit(this.selectedRadioButtonValue);
  }

}
