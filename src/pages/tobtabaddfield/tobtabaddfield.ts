import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TobtabkuiriPage } from '../tobtabkuiri/tobtabkuiri';
/**
 * Generated class for the TobtabaddfieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtabaddfield',
  templateUrl: 'tobtabaddfield.html',
})
export class TobtabaddfieldPage {

  property: any;
userDetails:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
  	    this.blabla(this.userDetails.usr_id);
  }
blabla(id){
  this.authService.findTobtabAddField(id).then(
            property => {this.property = property;
              console.log('tambah bidang',this.property);
              // this.property.filter(district => district.add_field_status_id == 2);
            }
        )

  }
  openKuiri(x: any) {
        this.navCtrl.push(TobtabkuiriPage, x);
        console.log(x);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabaddfieldPage');
  }

}
