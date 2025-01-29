import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url : string = 'https://restcountries.com/v3.1';

  constructor(  private httpClient : HttpClient   ) { }

  searchCountryByCode( code : string): Observable<Country | null> {
    const url = `${this.url}/alpha/${code}`;

    return this.httpClient.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( error => of(null) )
      );
  }

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
