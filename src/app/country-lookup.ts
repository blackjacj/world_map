import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryLookup {

  constructor(private http: HttpClient) { }


  getCountryData(countryCode: string): Observable<any> {
    let url = ("https://api.worldbank.org/v2/country/" + countryCode + "?format=json")
    return this.http.get(url)
  }
}
