import { Injectable } from '@angular/core';
import { Car } from './model/car';

@Injectable()
export class CarService {

  constructor() { }

  getCars(): Car[] {
    return [
      {id: 1, model: "207", nbrDePlace: 5},
      {id: 2, model: "3008", nbrDePlace: 8},
      {id: 3, model: "106", nbrDePlace : 1}
    ]
  }
}
