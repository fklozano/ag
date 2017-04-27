import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgTabs } from '../pages/ag-tabs/ag-tabs';
import { Db } from "../providers/db";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AgTabs;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public db: Db) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

