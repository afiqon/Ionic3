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
tobtabs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	  const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
  	    this.blabla(this.userDetails.usr_id);
  	
  }
 blabla(id){
  this.authService.findTobtabApplication(id).then(property => {
        this.property = property;
        console.log('console log ionic',this.property);
      });
   // debugger;
     this.authService.findByIdTobtab(id).then(property => {
        this.tobtabs = property;
        console.log('console log tobttabs',this.tobtabs);
      });
  }
  //findByIdTobtab
    openKuiri(x: any) {
        this.navCtrl.push(TobtabkuiriPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabapplicationPage');
  }

}
