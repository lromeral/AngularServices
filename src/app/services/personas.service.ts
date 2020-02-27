import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {



  constructor(private http: HttpClient) { }

  getPersonas():any[]{
    this.http.get<any[]>('assets/personas.json').subscribe(
      p =>{ return p;
      console.log(p);}
    );
}

}
