// Importamos Injectable para poder inyectar la clase en otros componentes
import { Injectable } from '@angular/core';
// Importar objetos de la librería http
import { HttpClient } from '@angular/common/http';
// Importamos la clase Observable desde la librería rxjs
import { Observable } from 'rxjs';

// providedIn: 'root' incorpora el service al módulo raíz, luego ya no hace falta importarlo en el app.module
@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  constructor(private http: HttpClient) {
    // en el constructor no debe contener lógica extra
    // su función es únicamente recibir las dependencias
  }

  // Método que gestiona el acceso al servicio.
  // Devuelve un observable de tipo array any.
  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/all');
  }

}