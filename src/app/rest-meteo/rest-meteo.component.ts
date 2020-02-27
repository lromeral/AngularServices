import { Component, OnInit } from '@angular/core';

import { RestMeteoService } from '../services/rest-meteo.service';

@Component({
  selector: 'app-rest-meteo',
  templateUrl: './rest-meteo.component.html',
  styleUrls: ['./rest-meteo.component.css']
})
export class RestMeteoComponent implements OnInit {

  infoMeteo: any[] = [];
  latitud: number;
  longitud: number;

  constructor(private meteoService: RestMeteoService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.getInfoMeteo();
      });
    }
  }

  getInfoMeteo() {
    this.meteoService.getInfoMeteo(this.latitud, this.longitud).subscribe(
      data => {
        console.log(data);
        this.infoMeteo = data;
      },
      err => console.log(err),
      () => console.log("OK")
    )
  }

}
