import { Component } from '@angular/core';
import { CountryLookup } from '../country-lookup';

@Component({
  selector: 'app-map-comp',
  imports: [],
  templateUrl: './map-comp.html',
  styleUrl: './map-comp.css'
})
export class MapComp {

  constructor(private countryService: CountryLookup) {}

  countryName = "Please Select a Country"
  capital = "None"
  region = "None"
  income = "None"
  longitude = "None"
  latitude = "None"

  getCountryDetails(event: any) {
    this.countryService.getCountryData(event.target.id).subscribe(data => {
      this.countryName = (data[1][0].name)
      this.capital = (data[1][0].capitalCity)
      this.region = (data[1][0].region.value)
      this.income = (data[1][0].incomeLevel.value)
      this.longitude = (data[1][0].longitude)
      this.latitude = (data[1][0].latitude)
    })
  }

}

