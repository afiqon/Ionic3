import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IlppermitdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ilppermitdetail',
  templateUrl: 'ilppermitdetail.html',
})
export class IlppermitdetailPage {
 property: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.property = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IlppermitdetailPage');
  }

}
