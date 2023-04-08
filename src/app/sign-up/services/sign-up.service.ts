import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICountry } from '../models/country.model';
import {
  RESTCOUNTRIES_ENDPOINTS,
  RESTCOUNTRIES_BASE_PATH,
} from '../constants/sign-up.constants';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http = inject(HttpClient);

  getCountries(countryName?: string): Observable<ICountry[]> {
    const url = countryName
      ? `${RESTCOUNTRIES_BASE_PATH}/${RESTCOUNTRIES_ENDPOINTS.name}/${countryName}`
      : `${RESTCOUNTRIES_BASE_PATH}/${RESTCOUNTRIES_ENDPOINTS.all}`;

    return this.http.get<ICountry[]>(url).pipe(
      map((response: ICountry[]) => {
        return response.sort((a: ICountry, b: ICountry) =>
          a.name.common.localeCompare(b.name.common)
        );
      })
    );
  }
}
