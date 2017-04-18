import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { AgTabs } from './ag-tabs';

@NgModule({
  declarations: [
    AgTabs,
  ],
  imports: [
    IonicPageModule.forChild(AgTabs),
  ]
})
export class AgTabsModule {}
