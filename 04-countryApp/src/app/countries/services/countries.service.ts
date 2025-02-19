import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, count, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url : string = 'https://restcountries.com/v3.1';

  constructor(  private httpClient : HttpClient   ) { }

  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) ),
        // delay(2000)
      );
  };

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

    return this.getCountriesRequest( url );
  }

  searchCountry( term : string): Observable<Country[]>{
    const url = `${this.url}/name/${term}`;

    return this.getCountriesRequest( url );
  }

  searchRegion( term : string ) : Observable<Country[]> {
    const url = `${this.url}/region/${term}`;

    return this.getCountriesRequest( url );
  }

}
