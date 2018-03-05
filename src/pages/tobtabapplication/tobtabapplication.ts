import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TobtabkuiriPage } from '../tobtabkuiri/tobtabkuiri';
/**
 * Generated class for the TobtabapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtabapplication',
  templateUrl: 'tobtabapplication.html',
})
export class TobtabapplicationPage {
property: any;
userDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	  const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
  	    this.blabla(this.userDetails.usr_id);
  	
  }
 blabla(id){
  this.authService.findTobtabApplication(id).then(
            property => this.property = property
        )
   // debugger;
       console.log(this.property);
  }
    openKuiri(x: any) {
        this.navCtrl.push(TobtabkuiriPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabapplicationPage');
  }

}
