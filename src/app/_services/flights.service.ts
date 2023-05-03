import { Injectable } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class FlightServices {
  constructor() {}

  getFlights(begin: any, end: any) {
    return axios.get(`https://opensky-network.org/api/flights/all?begin=${begin}&end=${end}`, {
      headers: {
        Cookie: "XSRF-TOKEN=9a014e9f-274c-42d5-be87-597f0671e3ea",
      },
    });
  }

  getCurrentDate() {
    return moment().format("YYYY-MM-DDTkk:mm");
  };
  
  getLast2Hrs() {
    return moment().subtract(2, "hours").format("YYYY-MM-DDTkk:mm");
  };
  
  getTimeStamp(value: any) {
    let getValueTimeStamp = new Date(value).getTime() / 1000;
    return new Date(getValueTimeStamp).getTime();
  };
  
  getLast2HrsWithParam(value: any) {
    let last2Hrs = moment(value).subtract(2, "hours").format("YYYY-MM-DDTkk:mm");
    return moment(last2Hrs).format("YYYY-MM-DDTkk:mm");
  };
}
