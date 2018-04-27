import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaPage } from './spa';

@NgModule({
  declarations: [
    SpaPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaPage),
  ],
})
export class SpaPageModule {}
