import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotelapplicationPage } from '../hotelapplication/hotelapplication';
import { HotelclassificationPage } from '../hotelclassification/hotelclassification';
/**
 * Generated class for the SpiphotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spiphotel',
  templateUrl: 'spiphotel.html',
})
export class SpiphotelPage {
tab1Root = HotelapplicationPage;
tab2Root= HotelclassificationPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpiphotelPage');
  }

}
