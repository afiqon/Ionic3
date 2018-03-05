import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BpkspProvider } from '../../providers/bpksp/bpksp';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {MapPage} from '../map/map';
/**
 * Generated class for the Bksp2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bksp2',
  templateUrl: 'bksp2.html',
})
export class Bksp2Page {
property: any;
users:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bpkspService: BpkspProvider,public authService: AuthServiceProvider) {
  	this.property = this.navParams.data;
  	this.bpkspService.findByIdBpksp(this.property.tobtab_id).then(
            property => this.property = property
        );
  	console.log(this.property);
  	this.findMap(this.property.appl_company_address);
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
    console.log('ionViewDidLoad Bksp2Page');
  }

}
