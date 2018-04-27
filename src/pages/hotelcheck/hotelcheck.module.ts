import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelcheckPage } from './hotelcheck';

@NgModule({
  declarations: [
    HotelcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelcheckPage),
  ],
})
export class HotelcheckPageModule {}
