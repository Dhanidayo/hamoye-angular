import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
// import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { FlightsComponent } from './pages/flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
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
