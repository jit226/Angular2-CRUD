import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';


import { IEmployee } from './employees';

@Injectable()
export class EmployeeServices {

  constructor(private _http: Http) { }

  getEmployee(): Observable<IEmployee[]> {
    return this._http.get('http://localhost:49646/api/employee')
      .pipe(map((response: Response) => <IEmployee[]>response.json()))
      .pipe(catchError(this.handleError));
      
  }

  getEmployeeByCode(code): Observable<IEmployee> {
    return this._http.get('http://localhost:49646/api/employee/'+code)
      .pipe(map((response: Response) => <IEmployee>response.json()))
      .pipe(catchError(this.handleError));
      
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error);
}
}