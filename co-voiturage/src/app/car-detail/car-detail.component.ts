import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../model/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car;

  constructor(private carService : CarService) { }

  ngOnInit() {
  }

  onUpdate(){
  }

  onDelete(){
    console.log("on entre dans le delete");
    this.carService.deleteCar(this.car);
  }
}
