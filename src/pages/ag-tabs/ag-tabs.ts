import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MAP } from "../map/map";
import { POI } from "../poi/poi";
import { Favorites } from "../favorites/favorites";

/**
 * Generated class for the AgTabs tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-ag-tabs',
  templateUrl: 'ag-tabs.html'
})
@IonicPage()
export class AgTabs {

  tab1Root: any = MAP;
  tab2Root: any = POI;
  tab3Root: any = Favorites;

  constructor(public navCtrl: NavController) {}

}
