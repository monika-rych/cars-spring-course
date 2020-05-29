import { Injectable } from '@angular/core';
import { Car } from './car';
import { CarWithLinks } from "./CarWithLinks";
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'http://localhost:8080/cars';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getCars(): Observable<CarWithLinks> {
    return this.http.get<CarWithLinks>(this.carsUrl)
      .pipe(
        tap(_ => this.log('fetched cars')),
        catchError(this.handleError<CarWithLinks>('getCars'))
      );
  }

  getCar(id: number): Observable<Car> {
      const url = `${this.carsUrl}/${id}`;
      return this.http.get<Car>(url).pipe(
        tap(_ => this.log(`fetched car id=${id}`)),
        catchError(this.handleError<Car>(`getCar id=${id}`))
      );
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarService: ${message}`);
  }
}
