import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlightServices {
  constructor(private httpClient: HttpClient) {}

  getFlights(): Observable<any> {
    return this.httpClient
      .get(
        'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800'
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
