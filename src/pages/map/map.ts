import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

declare var google: any;

/**
 * Generated class for the MAP page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MAP {

  mapHandle: any; //Manejador del mapa
  XYcoords: any = { lat: 0, lng: 0};  

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public geolocation: Geolocation) {

      platform.ready().then(() => {
          console.log('Platform Ready');
          //la plataforma está lista y podemos usar los plugins
          this.getCurrentPosition();
          //Este sería el sitio para comprobar si hay internet
      });

  }

  getCurrentPosition():any{
    
      this.geolocation.getCurrentPosition().then(res => {
      this.XYcoords.lat = res.coords.latitude;
      this.XYcoords.lng = res.coords.longitude;

      this.loadGoogleMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );

  };

  loadGoogleMap(){
    let mapContainer = document.getElementById('map');
    this.mapHandle = new google.maps.Map(mapContainer,{
        center: this.XYcoords,
        zoom: 12
    });
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MAP');
  }

}
