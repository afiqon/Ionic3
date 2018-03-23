import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BpkspapplicationPage } from '../bpkspapplication/bpkspapplication';
import { BpksprenewPage } from '../bpksprenew/bpksprenew';
import { BpkspchangeconditionPage } from '../bpkspchangecondition/bpkspchangecondition';
/**
 * Generated class for the SpipbpkspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spipbpksp',
  templateUrl: 'spipbpksp.html',
})
export class SpipbpkspPage {
tab1Root = BpkspapplicationPage;
tab2Root= BpksprenewPage;
tab3Root= BpkspchangeconditionPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpipbpkspPage');
  }

}
