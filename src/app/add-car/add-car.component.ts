import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public car = {} as Car;
  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public save(): void {
    this.carService.save(this.car).subscribe(
      () => {
        this.messageService.add(`car with id ${this.car.id} added!`);
        this.car = {} as Car;
      }
    );
  }

}
