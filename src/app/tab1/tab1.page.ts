import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  length = 8;
  valorDoCep: boolean = false;
  msg: string = "";
  endereco: any = {};

  constructor(private http: HttpClient) {}

  reset(cep) {
    this.endereco = {};
    this.valorDoCep = false;
  }

  validacao(cep) {
    if (cep.length != this.length) {
      this.valorDoCep = true;
      this.msg = "O cep deve conter 8 númeos!";
    }
  }

  consultarEndereco(cep) {
    this.validacao(cep);
    if ( this.valorDoCep == false) {
      var urlApi = `http://viacep.com.br/ws/${cep}/json/`;
     this.http.get(urlApi).subscribe(consulta => {
      this.endereco = consulta;
      cep = "";
     });
    }   
  }

}
