import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { StatisticPage } from '../statistic/statistic';
import { HotelPage } from '../hotel/hotel';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
/**
 * Generated class for the PenguatkuasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-penguatkuasa',
  templateUrl: 'penguatkuasa.html',
})
export class PenguatkuasaPage {
properties: Array<any>;
 searchKey: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	this.findhotel();

  }

  onInput(event) {
        this.authService.findHotel2(this.searchKey)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
            console.log(this.properties);
    }
findhotel(){
	   this.authService.Hotelcheck()
            .then(data => {this.properties = data;
            	console.log('hotel data',this.properties);
            })
            .catch(error => alert(error));
}
  stat(){

      this.navCtrl.push(StatisticPage);
  }
   hotel(){
 
    
    this.navCtrl.setRoot(HotelPage);
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PenguatkuasaPage');
  }

}
