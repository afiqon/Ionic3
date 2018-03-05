import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IlpProvider } from '../../providers/ilp/ilp';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {MapPage} from '../map/map';
/**
 * Generated class for the Ilp2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ilp2',
  templateUrl: 'ilp2.html',
})
export class Ilp2Page {
property: any;
users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider,public ilpService: IlpProvider) {
  	this.property = this.navParams.data;
  		this.ilpService.findByIdIlp(this.property.usr_id).then(
            property => this.property = property
        );
  	console.log(this.property);
  	this.findMap(this.property.company_address);
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
    console.log('ionViewDidLoad Ilp2Page');
  }

}
