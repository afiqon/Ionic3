import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { KuiriPage } from '../kuiri/kuiri';
/**
 * Generated class for the TgnewlicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tgnewlicense',
  templateUrl: 'tgnewlicense.html',
})
export class TgnewlicensePage {
property: any;
items:any[] = [];
kuiri:any;
userDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	  const data = JSON.parse(localStorage.getItem("userData"));
  	  this.userDetails = this.navParams.data;
  this.blabla(this.userDetails.usr_id);
  	 

  }
   loadPeople(id){
     let data:any[] = [];
    this.authService.getUsers(id)
    .then(kuiri => {
      this.kuiri = kuiri;
    });
    
  }
  blabla(id){
  this.authService.findPermohonanbaru(id).then(
            property => this.property = property
        )
  }
  openKuiri(x: any) {
        this.navCtrl.push(KuiriPage, x);
        console.log(x);
    }
 ionViewWillEnter(){
   	  	   
  	
 }
 ionViewDidEnter(){
 
 }
  ionViewDidLoad() {

    console.log('ionViewDidLoad TgnewlicensePage');
  }

}
