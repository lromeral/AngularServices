import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule} from 'primeng/button';
import { GMapModule } from 'primeng/gmap'
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { RestCountriesComponent } from './rest-countries/rest-countries.component';
import { RestMeteoComponent } from './rest-meteo/rest-meteo.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [
    AppComponent,
    RestCountriesComponent,
    RestMeteoComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    GMapModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
