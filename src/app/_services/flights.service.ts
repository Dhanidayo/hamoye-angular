import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FlightServices {
  constructor() {}

  getFlights() {
    return axios.get('https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800', {
      headers: {
        Cookie: "XSRF-TOKEN=9a014e9f-274c-42d5-be87-597f0671e3ea",
      },
    });
  }
}
