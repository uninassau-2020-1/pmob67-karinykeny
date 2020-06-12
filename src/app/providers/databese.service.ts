import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DatabeseService {

  constructor(private sqlite: SQLite) { }
  
  public getBD() {
    return this.sqlite.create({
      name: 'dbapp.db',
      location: 'default'
    });
  }

  public createBD() {
    return this.getBD()
    .then((db: SQLiteObject) => {
      this.createTable(db);
    })
    .catch(e => console.error(e));
  }

  private createTable(db: SQLiteObject) {
    return db.sqlBatch(
     ['CREATE TABLE IF NOT EXISTS endereco(id int IDENTITY(1,1) PRIMARY KEY, end varchar);'] 
    ).then(() => {
      console.log("Deu certo")
    }).catch(e => {
      console.error(e);
    });
  }
}
