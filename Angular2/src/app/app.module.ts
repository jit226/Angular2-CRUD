import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
//import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeheaderComponent } from './employeeheader/employeeheader.component';
//import { SampleComponent } from './Other/sample.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';

import {EmployeeModule} from './employee.module';


const appRoutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'employees',component:EmployeeComponent},
  { path: 'employees/:code', component: SingleemployeeComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeheaderComponent,
    //SampleComponent,
    HomeComponent,
    PagenotfoundComponent,
    SingleemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpClientModule,
    HttpModule,
    EmployeeModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
