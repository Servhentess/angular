import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  car: Car = new Car();

  constructor(private carService: CarService) { }

  ngOnInit() {    
  }

  onSubmit(){
    this.carService.createCar(this.car).subscribe(car => this.car = car);
  }
}
