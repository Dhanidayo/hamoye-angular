import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlightServices } from 'src/app/_services/flights.service';
import * as moment from 'moment';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  title: string = 'Hamoye';
  isData!: boolean;
  loading = false;
  flights: any;
  p: number = 1;
  typeSelected: string;
  dateValue: any;
  totalFlights: number = 0;
  currentDate: any;
  last2hrs: any;
  beginTimestamp: any;
  endTimeStamp: any;
  last2hrsSearch: any;
  selectedTimeStamp: any;
  last2hrsTimestamp: any;
  errorMsg: any;

  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private flightServices: FlightServices,
    private library: FaIconLibrary
  ) {
    this.typeSelected = 'ball-fussion';
    this.dateValue = moment(new Date()).format('YYYY-MM-DDTkk:mm');
    this.currentDate = this.flightServices.getCurrentDate();
    this.last2hrs = this.flightServices.getLast2Hrs();
    this.beginTimestamp = this.flightServices.getTimeStamp(this.last2hrs);
    this.endTimeStamp = this.flightServices.getTimeStamp(this.currentDate);
    library.addIcons(faUndo);
  }

  ngOnInit() {
    this.getFlightsServices(this.beginTimestamp, this.endTimeStamp);
  }

  getFlightsServices(begin: any, end: any): any {
    this.loading = true;
    this.isData = true;
    this.spinnerService.show();
    this.flightServices
      .getFlights(begin, end)
      .then((res) => {
        this.loading = false;
        this.flights = res.data;
        this.totalFlights = this.flights.length;
        this.spinnerService.hide();
        // console.log('Flights', this.flights);
      })
      .catch((err) => {
        this.loading = false;
        if (err.response.status === 404) {
          console.log(err);
          this.isData = false;
          this.errorMsg = 'No data found';
          this.totalFlights = 0;
        } else {
          console.log(err);
          this.isData = false;
          this.errorMsg = 'Unable to fetch data';
          this.totalFlights = 0;
        }
      });
  }

  headElements = ['Airport', 'Time', 'Arriving', 'Departing'];

  formatTime(time: any) {
    return moment(time).format('YYYY-MM-DDTkk:mm A').split('T')[1];
  }

  onDateChange(event: any) {
    this.dateValue = event.target.value;
  }

  async handleSearch() {
    this.last2hrsSearch = this.flightServices.getLast2HrsWithParam(
      this.dateValue
    );
    this.selectedTimeStamp = this.flightServices.getTimeStamp(this.dateValue);
    this.last2hrsTimestamp = this.flightServices.getTimeStamp(
      this.last2hrsSearch
    );
    this.getFlightsServices(this.last2hrsTimestamp, this.selectedTimeStamp);
  }

  reset() {
    window.location.reload();
  }

  handleLogout() {
    this.router.navigate(['/login']);
  }
}
