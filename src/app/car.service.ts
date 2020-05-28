import { Injectable } from '@angular/core';
import { Car } from './car';

import { Observable, of } from 'rxjs';
import { CARS } from './mock-cars';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    this.messageService.add('CarService: fetched cars');
    return of(CARS);
  }
  getCar(id: number): Observable<Car> {
    // TODO: send the message _after_ fetching the car
    this.messageService.add(`CarService: fetched car id=${id}`);
    return of(CARS.find(car => car.id === id));
  }
}
