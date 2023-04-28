import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import axios from 'axios';

import { FormsModule } from "@angular/forms";
// import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { FlightsComponent } from './pages/flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FlightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }