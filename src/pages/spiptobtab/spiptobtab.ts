import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TobtabapplicationPage } from '../tobtabapplication/tobtabapplication';
import { TobtabrenewPage } from '../tobtabrenew/tobtabrenew';
import { TobtabchangestatusPage } from '../tobtabchangestatus/tobtabchangestatus';
import { TobtabaddfieldPage } from '../tobtabaddfield/tobtabaddfield';
import { TobtabaddbranchPage } from '../tobtabaddbranch/tobtabaddbranch';
/**
 * Generated class for the SpiptobtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spiptobtab',
  templateUrl: 'spiptobtab.html',
})
export class SpiptobtabPage {
tab1Root = TobtabapplicationPage;
	tab2Root= TobtabrenewPage;
	tab3Root= TobtabchangestatusPage;
	tab4Root= TobtabaddfieldPage;
	tab5Root= TobtabaddbranchPage;		
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpiptobtabPage');
  }

}
