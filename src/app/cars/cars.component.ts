import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService} from '../car.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
   cars: Car[]; 

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }
}
