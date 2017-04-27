import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
/*
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
*/

/*
  Generated class for the Db provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Db {

  constructor(public db: SQLite) {
    console.log('Hello Db Provider');
  }

}
