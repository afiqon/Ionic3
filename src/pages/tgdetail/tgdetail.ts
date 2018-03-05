import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {MapPage} from '../map/map';
/**
 * Generated class for the TgdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tgdetail',
  templateUrl: 'tgdetail.html',
})
export class TgdetailPage {
property: any;
users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	    this.property = this.navParams.data;
        this.authService.findById(this.property.pers_tg_id).then(
            property => this.property = property
        );
this.findMap(this.property.pers_tg_address);
console.log("Alamat: ",this.property);
  }
openMap(property: any) {
        this.navCtrl.push(MapPage, {
      property: property,
     
});
        console.log(property);
    }
     findMap(id:any) {
    this.authService.findMap(id)
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TgdetailPage');
  }

}
