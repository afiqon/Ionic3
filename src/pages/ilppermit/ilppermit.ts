import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IlppermitdetailPage } from '../ilppermitdetail/ilppermitdetail';
/**
 * Generated class for the IlppermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ilppermit',
  templateUrl: 'ilppermit.html',
})
export class IlppermitPage {
ilps: any;
userDetails:any;
properties:any;
   constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
  	this.findIlp(this.userDetails.usr_id);
   	this.findApplication(this.userDetails.usr_id);
  }
   findIlp(id){
    this.authService.findILP(id).then(data=>{
	this.ilps=data;
    })
  }
  findApplication(id){
  this.authService.ILPPermit(id).then(
            data => {
            this.properties = data;
            console.log('ilp baru',this.properties);
        })
  }
    openDetail(x: any) {
        this.navCtrl.push(IlppermitdetailPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IlppermitPage');
  }

}
