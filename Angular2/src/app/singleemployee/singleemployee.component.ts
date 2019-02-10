import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employees';
import { EmployeeServices } from '../employee.services';
import {ActivatedRoute,Router} from '@angular/router';

import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-singleemployee',
  templateUrl: './singleemployee.component.html',
  styleUrls: ['./singleemployee.component.css'],
  providers:[EmployeeServices]
})
export class SingleemployeeComponent implements OnInit {
  employee:IEmployee;
  statusMessage:string;
  constructor(private _empService:EmployeeServices,private _activeRouter:ActivatedRoute,
    private _router:Router) { }

  ngOnInit() {
    this._empService.getEmployeeByCode(this._activeRouter.snapshot.params['code'])
    .subscribe(
      employeee=>{
        if(employeee==null)
        {
          this.statusMessage="No";
        }
        else
        {
        this.employee=employeee
      }
      }
    )
  }
  onClickBack():void{
this._router.navigate(['/employees']);
  }
}
