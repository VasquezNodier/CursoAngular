import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor (
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(params => {
    //     console.log(params);
    //   })

    // Así podemos desestructurar el objeto params
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.countriesService.searchCountryByCode(id) )
      )
      .subscribe( country  => {
        if (!country) {
          this.router.navigateByUrl('/');
          console.log('Existe el país');
          return;
        }
      })
  }

}
