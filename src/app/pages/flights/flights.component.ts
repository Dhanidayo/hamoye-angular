import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlightServices } from 'src/app/_services/flights.service';
import * as moment from 'moment';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  title: string = 'Hamoye';
  loading = false;
  flights: any;
  p: number = 1;
  typeSelected: string;

  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private flightServices: FlightServices
  ) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit() {
    this.getFlightsServices();
  }

  getFlightsServices(): any {
    this.loading = true;
    this.spinnerService.show();
    this.flightServices
      .getFlights()
      .then((res) => {
        this.loading = false;
        this.flights = res.data;
        this.spinnerService.hide();
        console.log('Flights', this.flights);
      })
      .catch((err) => {
        this.loading = false;
        console.log("Can't get flightServices", err);
      });
  }

  headElements = ['Airport', 'Time', 'Arriving', 'Departing'];

  formatTime(time: any) {
    return moment(time).format('YYYY-MM-DDTkk:mm A').split('T')[1];
  }

  handleLogout() {
    this.router.navigate(['/login']);
  }
}
