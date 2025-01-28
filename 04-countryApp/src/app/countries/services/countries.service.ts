import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url : string = 'https://restcountries.com/v3.1';

  constructor(  private httpClient : HttpClient   ) { }

  searchCapital( term : string): Observable<Country[]>{
    const url = `${this.url}/capital/${term}`;

    return this.httpClient.get<Country[]>( url ).pipe(
      catchError( error => of([]) )
     );
  }

  searchCountry( term : string): Observable<Country[]>{
    const url = `${this.url}/name/${term}`;

    return this.httpClient.get<Country[]>( url ).pipe(
      catchError( error => of([]) )
     );
  }

  searchRegion( term : string ) : Observable<Country[]> {
    const url = `${this.url}/region/${term}`;

    return this.httpClient.get<Country[]>( url ).pipe(
      catchError( error => of([]) )
    );
  }

}
