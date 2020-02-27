import { Component, OnInit } from '@angular/core';
import { RestCountriesService } from '../services/rest-countries.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent implements OnInit {
  paises: any[] = [];
  cols: any[] = [];
  seleccionado: string;

  constructor(
    private countryListService: RestCountriesService
  ) { }

  ngOnInit() {

    this.cols = [
      { field: '', header: '', width: '10%' },
      { field: 'name', header: 'País', width: '20%' },
      { field: 'capital', header: 'Capital', width: '20%' },
      { field: 'population', header: 'Habitantes', width: '20%' },
      { field: 'region', header: 'Continente', width: '20%' }
    ];

    this.getPaises();
    console.log(this.seleccionado);

  }

  getPaises() {
    this.countryListService.getCountries().subscribe(
      (data) => {
        console.log(typeof (data));
        this.paises = data;
      },
      err => console.log(err),
      () => console.log('OK')
    );

  }
  getSeleccionado(event: any) {
    this.seleccionado = event.target.value;

    console.log(this.getPaisByName(this.seleccionado));

    //console.log(event.target.value);

  }

  getPaisByName(name: any): any[] {
    let pais: any[];
    
    pais = this.paises.find ( p => name=p.name);
    
    //console.log(this.paises)
    return pais;
  }
}
