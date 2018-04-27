import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatisticPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistic',
  templateUrl: 'statistic.html',
})
export class StatisticPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
 public pieChartLabels:string[] = ['Kuala Lumpur', 'Selangor', 'Perak', 'Kedah', 'Pulau Pinang', 'Perlis', 'Kelantan', 'Terengganu', 'Pahang', 'Johor', 'Melaka', 'Negeri Sembilan', 'Sabah', 'Sarawak'];
  public pieChartData:number[] = [220, 1240, 408, 345, 890, 603, 450, 443, 455, 123, 660, 34, 232, 131];
  public pieChartType:string = 'pie';

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticPage');
  }

}
