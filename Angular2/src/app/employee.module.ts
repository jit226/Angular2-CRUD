import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HttpModule } from '@angular/http';
import { SampleComponent   } from './Other/sample.component';

import {TestServices} from './test.services';

// const appRoutes:Routes=[

//   {path:'employees',component:EmployeeComponent},
//   { path: 'employees/:code', component: SingleemployeeComponent },

// ];

@NgModule({
  declarations: [   
    SampleComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TestServices],
//   bootstrap: [AppComponent]
})
export class EmployeeModule { }
