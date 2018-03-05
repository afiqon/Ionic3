import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {MapPage} from '../map/map';
/**
 * Generated class for the Tobtab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtab2',
  templateUrl: 'tobtab2.html',
})
export class Tobtab2Page {
property: any;
users:any;
data;
name:any;
branchs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	this.property = this.navParams.data;
        this.authService.findByIdTobtab(this.property.usr_id).then(
            property => this.property = property
        );
        this.findMap(this.property.appl_company_address);
        this.findMapByName(this.property.appl_company_name);
        this.findTobtabBranch(this.property.usr_id);
        console.log(this.property);
  }
 findMap(id:any) {
    this.authService.findMap(id)
    .then(data => {
      this.users = data;
      console.log('users value',this.users);
    });
  }
  findMapByName(id:any) {
    this.authService.findMap(id)
    .then(data => {
      this.name = data;
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
   findTobtabBranch(id:any){
 this.authService.findTobtabBranch(id)
    .then(data => {
      this.branchs = data;
    });
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tobtab2Page');
  }

}
