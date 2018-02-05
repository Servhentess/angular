import { Injectable } from '@angular/core';
import { Car } from './model/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class CarService {

  urlApi : string = environment.urlApi+"/cars/";
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
   }

  getCars(): Observable <Car[]> {
    return this.http.get<Car[]>(this.urlApi);
  }

  createCar(car : Car): Observable <Car> {
    return this.http.post<Car>(this.urlApi, car, this.httpOptions);
  }

  changeCar(car : Car): Observable <Car>{
    return this.http.put<Car>(this.urlApi+car.id, car, this.httpOptions);
  }

  deleteCar(car : Car): void{
    this.http.delete<Car>(this.urlApi+car.id).subscribe();
  }
}
