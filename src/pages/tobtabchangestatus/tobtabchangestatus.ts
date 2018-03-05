import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TobtabchangestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtabchangestatus',
  templateUrl: 'tobtabchangestatus.html',
})
export class TobtabchangestatusPage {

 property: any;
userDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	  const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
  	    this.blabla(this.userDetails.usr_id);
  	
  }
 blabla(id){
  this.authService.findTobtabStatus(id).then(
            property => this.property = property
        )
   // debugger;
       console.log(this.property);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabchangestatusPage');
  }

}
