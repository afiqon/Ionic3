import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {MapPage} from '../map/map';
/**
 * Generated class for the Penguatkuasa3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-penguatkuasa3',
  templateUrl: 'penguatkuasa3.html',
})
export class Penguatkuasa3Page {

property: any;
users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  		this.property = this.navParams.data;
  		this.findMap(this.property.premise_address);
  }
 findMap(id:any) {
    this.authService.findMap(id)
    .then(data => {
      this.users = data;
      console.log('users value',this.users);
    });
  }
    openMap(property: any,comName:any) {
    console.log('openmap property geo',property.geometry.location.lat);
        this.navCtrl.push(MapPage,  {
      property: property,
      comName: comName,
     
});
        console.log(property);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel2Page');
  }

}
