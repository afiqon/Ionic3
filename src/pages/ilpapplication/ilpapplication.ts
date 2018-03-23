import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QueryPage } from '../query/query';
/**
 * Generated class for the IlpapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ilpapplication',
  templateUrl: 'ilpapplication.html',
})
export class IlpapplicationPage {
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
	console.log('ILP Page',this.ilps);
    })
  }
  findApplication(id){
  this.authService.ILPApplication(id).then(
            data => {
            this.properties = data;
          
        })
  }
  openKuiri(x: any) {
        this.navCtrl.push(QueryPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IlpapplicationPage');
  }

}
