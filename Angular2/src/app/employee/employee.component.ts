import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employees';
import { EmployeeServices } from '../employee.services';
import {TestServices } from '../test.services';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServices]
})
export class EmployeeComponent implements OnInit {

  employees: IEmployee[];
  selectedRadioCountEmploye: string = "All";

  //private _testservices: TestServices;
  

  constructor(private _employeSerivic: EmployeeServices,private _testservices: TestServices) {
    //this._testservices = new TestServices();
  }

  get colors(): string {
    return this._testservices.myColor;
  }

  set colors(value: string) {
    this._testservices.myColor = value;
  }

  ngOnInit() {
    this._employeSerivic.getEmployee().subscribe(
      (data => {
        this.employees = data
      }),error=>{
        console.log("hii");
        console.log(error);
      })
  }

  getAllEmployee(): number {
    return this.employees.length;
  }
  getMaleEmployee(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }
  getFemaleEmployee(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }
  onEmpolyeeRadioBuggonCount(selectedValue: string): void {
    this.selectedRadioCountEmploye = selectedValue;
  }
}