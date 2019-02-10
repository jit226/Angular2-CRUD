import { Component, OnInit } from '@angular/core';

import { TestServices } from "../test.services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //private _testservices: TestServices;
  constructor(private _testservices: TestServices) {
    //this._testservices = new TestServices();
  }

  ngOnInit() {

  }
  get colors(): string {
    return this._testservices.myColor;
  }
  set colors(value: string) {
    this._testservices.myColor = value;
  }

}
