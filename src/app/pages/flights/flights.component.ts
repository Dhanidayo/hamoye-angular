import { Component, OnInit } from '@angular/core';
import { FlightServices } from 'src/app/_services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  loading = false;
  flights: any;
  // pagination
  maxSize = 6;
  totalItems = 1000;
  itemsPerPage = 50;
  page = 1;
  // serial: number;
  pageSize = 50;

  constructor(private flightServices: FlightServices) {}

  ngOnInit() {
    this.getFlightsServices();
  }

  getFlightsServices(): any {
    this.loading = true;
    this.flightServices.getFlights().subscribe(
      (data: any) => {
        this.loading = false;
        this.flights = data.data;
        // this.serial = 1 + (this.page - 1) * this.pageSize;
      },
      (error) => {
        this.loading = false;
        console.log('cant get flightServices', error);
      }
    );
  }


  headElements = ['Airport', 'Time', 'Arrival', 'Departure'];
}
