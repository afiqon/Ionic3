import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { KuiriPage } from '../kuiri/kuiri';
/**
 * Generated class for the TgrenewlicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tgrenewlicense',
  templateUrl: 'tgrenewlicense.html',
})
export class TgrenewlicensePage {
property: any;
items:any[] = [];
kuiri:any;
userDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 const data = JSON.parse(localStorage.getItem("userData"));
  	  this.userDetails = this.navParams.data;
  	  this.blabla(this.userDetails.usr_id);
  }
 blabla(id){
  this.authService.findPembaharuan(id).then(
            property => this.property = property
        )
  }
   openKuiri(x: any) {
        this.navCtrl.push(KuiriPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TgrenewlicensePage');
  }

}
