import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: any;
  form: any = {cep: ""};
  length = 8;
  addressValue: boolean = false;
  msg: string = "";
  address: any = {};
  address2: any = {};
  urlMaps: String;
  lat: any;
  lng: any;

  constructor(private http: HttpClient) { }

  reset(): void {
    this.address = {};
    this.addressValue = false;
    document.getElementById("map").style.display = "none";
    this.lat = 0;
    this.lng = 0;
  }

  vvalidation(inf): void {
    if (inf.cep == null || inf.cep.length != this.length) {
      this.addressValue = true;
      this.msg = "O cep deve conter 8 númeos!";
    }
  }

  consultAddress( cep ): void {
    this.addressValue = false;
    this.form = cep.form.value;
    this.vvalidation(this.form);
    if ( this.addressValue == false) {
      var urlApi = `http://viacep.com.br/ws/${this.form.cep}/json/`;
      this.http.get(urlApi).subscribe(query => {
      this.address = query;
      });
      if(!this.address.erro){
        this.initMap(this.form.cep);
      }
    } 
    this.form = " ";
  }

  initMap(cep): void {
    var urlApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyA3mJNC9IubR7M6WNvWaEhMGplG8WUVuPE`;
      this.http.get(urlApi).subscribe(query => {
        this.address2 = query;
        this.lat = this.address2.results[0].geometry.location.lat;
        this.lng = this.address2.results[0].geometry.location.lng;
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: this.lat, lng: this.lng},
          zoom: 17,
        });
        document.getElementById("map").style.display = "block";
      });
  }

}
