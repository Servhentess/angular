import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  maVariable = "Test qui tue";

  selectedCar: Car;
  cars: Car[] = [{id: 1, model: "207", nbrDePlace: 5},
                 {id: 2, model: "3008", nbrDePlace: 8},
                 {id: 3, model: "106", nbrDePlace : 1}];

  constructor() { }

  ngOnInit() {
  }

  onSelect(car: Car) : void {
    console.log("selected car: ", car);
    this.selectedCar = car;
  }
}
