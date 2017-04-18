import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { POI } from './poi';

@NgModule({
  declarations: [
    POI,
  ],
  imports: [
    IonicPageModule.forChild(POI),
  ],
  exports: [
    POI
  ]
})
export class POIModule {}
