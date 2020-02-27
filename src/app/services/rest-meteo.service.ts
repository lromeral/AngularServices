import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RestMeteoService {
  constructor(private http: HttpClient) { }
  
  getInfoMeteo(latitud: number, longitud: number): Observable<any[]> {
    return this.http.get<any[]>('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
     latitud + '&lon=' + longitud + '&units=metric&lang=es&cnt=10&appid=4762a050332f537f16d744fe848dfb3e');
  }
}