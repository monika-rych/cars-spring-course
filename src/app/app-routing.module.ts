import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component'
import { AddCarComponent } from './add-car/add-car.component';

const routes: Routes = [
  { path: 'detail/:id', component: CarDetailComponent },
  {path: 'cars', component: CarsComponent },
  {path: 'add-car', component: AddCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
