import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AgTabs } from "../pages/ag-tabs/ag-tabs";
import { MAP } from "../pages/map/map";
import { POI } from "../pages/poi/poi";
import { Favorites } from "../pages/favorites/favorites";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgTabs,
    MAP,
    POI,
    Favorites 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgTabs,
    MAP,
    POI,
    Favorites 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
