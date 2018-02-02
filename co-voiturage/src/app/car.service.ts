import { Injectable } from '@angular/core';
import { Car } from './model/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class CarService {

  urlApi : string = environment.urlApi;
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
   }

  getCars(): Observable <Car[]> {
    return this.http.get<Car[]>(this.urlApi + "cars");
  }

  createCar(): Observable <Car> {
    return this.http.post<Car>(this.urlApi+"cars", car, this.httpOptions);
  }
}
