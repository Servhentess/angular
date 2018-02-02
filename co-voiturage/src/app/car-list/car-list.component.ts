import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  maVariable = "Test qui tue";

  selectedCar: Car;
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  onSelect(car: Car) : void {
    console.log("selected car: ", car);
    this.selectedCar = car;
  }
}
