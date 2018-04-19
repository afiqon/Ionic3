import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QueryPage } from '../query/query';
/**
 * Generated class for the HotelclassificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotelclassification',
  templateUrl: 'hotelclassification.html',
})
export class HotelclassificationPage {
ilps: any;
userDetails:any;
properties:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 const data = JSON.parse(localStorage.getItem("userData"));
   		this.userDetails = data.userData;
   		this.findApplication(this.userDetails.usr_id);
  }
findApplication(id){
  this.authService.HotelClassification(id).then(
            data => {
            this.properties = data;
          console.log('hotel',this.properties);
        })
  }

}
