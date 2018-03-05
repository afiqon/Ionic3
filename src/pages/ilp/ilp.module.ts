import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IlpPage } from './ilp';

@NgModule({
  declarations: [
    IlpPage,
  ],
  imports: [
    IonicPageModule.forChild(IlpPage),
  ],
})
export class IlpPageModule {}
