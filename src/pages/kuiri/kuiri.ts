import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the KuiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kuiri',
  templateUrl: 'kuiri.html',
})
export class KuiriPage {
property: any;
kuiri:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 this.property = this.navParams.data;
     
   
  }
getkuiri(id)
{
	this.authService.findKuiri(id)
    .then(kuiri => {
      this.kuiri = kuiri;
    });
     console.log(this.kuiri);
}
 ionViewWillEnter(){
   	  this.getkuiri(this.property);	   
  	
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad KuiriPage');
  }

}
