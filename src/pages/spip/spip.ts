import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TgnewlicensePage } from '../tgnewlicense/tgnewlicense';
import { TgrenewlicensePage} from '../tgrenewlicense/tgrenewlicense';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SpipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spip',
  templateUrl: 'spip.html',
})
export class SpipPage {
userDetails :any;
property:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	const data = JSON.parse(localStorage.getItem("userData"));
     this.userDetails = data.userData;
  	
       this.authService.findPermohonanbaru(this.userDetails.usr_id).then(
            property => this.property = property
        );
  	console.log(this.property);
  }
openPropertyDetail(x: any) {
        this.navCtrl.push(TgnewlicensePage, this.userDetails);
        console.log(x);
    }
    openRenew(x:any){
         this.navCtrl.push(TgrenewlicensePage, this.userDetails);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpipPage');
  }

}
