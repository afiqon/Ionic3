import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TobtabkuiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtabkuiri',
  templateUrl: 'tobtabkuiri.html',
})
export class TobtabkuiriPage {

  property: any;
kuiri:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 this.property = this.navParams.data;
     
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabkuiriPage');
  }

}
