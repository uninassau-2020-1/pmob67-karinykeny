import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{

  form: any = {cep: ""};

  length = 8;
  valorDoCep: boolean = false;
  msg: string = "";
  endereco: any = {};

  constructor(private http: HttpClient) {}

  reset() {
    this.endereco = {};
    this.valorDoCep = false;
  }

  validacao(inf) {
    if (inf.cep == null || inf.cep.length != this.length) {
      this.valorDoCep = true;
      this.msg = "O cep deve conter 8 númeos!";
    }
  }

  consultarEndereco( cep ) {
    this.valorDoCep = false;
    this.form = cep.form.value;
    this.validacao(this.form);
    if ( this.valorDoCep == false) {
      var urlApi = `http://viacep.com.br/ws/${this.form.cep}/json/`;
     this.http.get(urlApi).subscribe(consulta => {
      this.endereco = consulta;
    });
    } 
    this.form = " ";
   }

}
