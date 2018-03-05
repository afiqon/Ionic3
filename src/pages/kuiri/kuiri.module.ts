import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KuiriPage } from './kuiri';

@NgModule({
  declarations: [
    KuiriPage,
  ],
  imports: [
    IonicPageModule.forChild(KuiriPage),
  ],
})
export class KuiriPageModule {}
