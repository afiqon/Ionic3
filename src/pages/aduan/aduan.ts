import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { IndexPage } from '../index/index';
/**
 * Generated class for the AduanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aduan',
  templateUrl: 'aduan.html',
})
export class AduanPage {
todo = {}
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,public alertCtrl: AlertController) {
  }
  goHome(){
	this.navCtrl.setRoot(IndexPage);
}
 logForm() {
    console.log(this.todo);
     this.http.post('http://localhost:1440/mail', this.todo).pipe(
            map(res => res.json())
        ).subscribe(response => {
            console.log('POST Response:', response);
        });
        let alert = this.alertCtrl.create({
    title: 'Aduan telah ',
    subTitle: 'Berjaya dihantar',
    buttons: ['OK']
  });
  alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AduanPage');
  }

}
