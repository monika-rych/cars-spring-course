import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService }  from '../car.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  public update(): void {
    this.carService.update(this.car).subscribe(
      () => {
        this.messageService.add(`car with id ${this.car.id} updated!`);
      }
    );
  }
}

