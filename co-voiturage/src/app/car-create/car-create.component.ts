import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {    
  }

}
