import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabeseService {

  constructor(private sqlite: SQLite) { }
  
  getBD() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
  }

  createData() {
    return this.getBD()
    .then((db: SQLiteObject) => {
      console.log(db);
    })
    .catch(e => console.error(e));
  }

  // createTable(db: SQLiteObject) {
  //   return db.sqlBatch(

  //   );
  // }
}
