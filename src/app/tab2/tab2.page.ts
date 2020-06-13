import { DatabeseService } from './../providers/databese.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  enderecos: any = new Array<any>();
  endereco: any = {};

  constructor(private db: DatabeseService) {}
  
  
  ngOnInit(): void {
    this.consultaLista();
  }

  
  consultaLista(){
    this.db.selectDB().then((end: Array<any>) => {
      this.enderecos = end;
      
    }).catch(e => {
      console.error(e);
    })
  }

  getEndereco(item: any): string{
    var jsonString = JSON.stringify(item);
    return jsonString;
  }

}
