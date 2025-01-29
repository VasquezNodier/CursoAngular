import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor (
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params);
    //   })

    // Así podemos desestructurar el objeto params
    this.activatedRoute.params
      .subscribe( ({id}) => {

        this.countriesService.searchCountryByCode(id)
          .subscribe( country => {
            console.log(country);
          })

      })
  }

}
