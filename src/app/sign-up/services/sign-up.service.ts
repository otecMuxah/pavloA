import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ICountry } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http = inject(HttpClient);

  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>('https://restcountries.com/v3.1/all').pipe(
      map((response: ICountry[]) => {
        return response.sort((a: ICountry, b: ICountry) =>
          a.name.common.localeCompare(b.name.common)
        );
      })
    );
  }
}
