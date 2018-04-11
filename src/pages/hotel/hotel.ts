import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Hotel2Page } from '../hotel2/hotel2';
/**
 * Generated class for the HotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {
properties: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	this.findHotel();
  }
goHome() {
       this.navCtrl.setRoot(IndexPage);
    }
openPropertyDetail(property: any) {
        this.navCtrl.push(Hotel2Page, property);
        console.log(property);
    }
findHotel() {
        this.authService.findHotelAll()
            .then(data => {this.properties = data;
            console.log(this.properties);
            })
            .catch(error => alert(error));
            
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

}
