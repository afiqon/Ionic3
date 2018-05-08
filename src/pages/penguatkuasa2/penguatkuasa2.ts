import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Penguatkuasa3Page } from '../penguatkuasa3/penguatkuasa3';
/**
 * Generated class for the Penguatkuasa2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-penguatkuasa2',
  templateUrl: 'penguatkuasa2.html',
})
export class Penguatkuasa2Page {
	properties: any;
	  searchKey: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	this.findHotel();
  }
openPropertyDetail(property: any) {
        this.navCtrl.push(Penguatkuasa3Page, property);
        console.log(property);
    }
findHotel() {
        this.authService.compound()
            .then(data => {this.properties = data;
            console.log(this.properties);
            })
            .catch(error => alert(error));
            
    }
        onInput(event) {
        this.authService.findCompound(this.searchKey)
            .then(data => {
                this.properties = data;
          
            })
            .catch(error => alert(JSON.stringify(error)));
            
    }

    onCancel(event) {
        this.properties=[];
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

}
