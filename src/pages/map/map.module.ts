import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { MAP } from './map';

@NgModule({
  declarations: [
    MAP,
  ],
  imports: [
    IonicPageModule.forChild(MAP),
  ],
  exports: [
    MAP
  ]
})
export class MAPModule {}
