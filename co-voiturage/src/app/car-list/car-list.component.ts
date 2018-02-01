import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  maVariable = "Test qui tue";

  car : Car = {id: 1, model: "207", nbrDePlace: 5};

  constructor() { }

  ngOnInit() {
  }

}
