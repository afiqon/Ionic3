import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { QueryPage } from '../query/query';

/**
 * Generated class for the BpkspapplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bpkspapplication',
  templateUrl: 'bpkspapplication.html',
})
export class BpkspapplicationPage {
property: any;
userDetails:any;
public dataFetched:any;
public appl_id:number = 0;
public noRecords: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	const data = JSON.parse(localStorage.getItem("userData"));
   this.userDetails = data.userData;
   this.findNewApplication(this.userDetails.usr_id);
  }
  openKuiri(x: any) {
        this.navCtrl.push(QueryPage, x);
        console.log(x);
    }
findNewApplication(id){
   this.authService.BpkspApplication(id,0)
            .then(data => {
     this.dataFetched = data;
     if (this.dataFetched) {
        this.property = this.dataFetched;
        // Data set length
        const dataLength = this.dataFetched.length;
        this.appl_id = this.dataFetched[dataLength - 1].date;
      } else {
       console.log("No data");
     }
})
            .catch(error => alert(error));
      
  }
    //infinite scroll implementation
    doInfinite(e): Promise<any> {
console.log("Begin async operation");
   return new Promise(resolve => {
   setTimeout(() => {
      this.authService.BpkspApplication(this.userDetails.usr_id,this.appl_id).then(
      result => {
         this.dataFetched = result;
         if (this.dataFetched.length) {
            const newData = this.dataFetched;
            this.appl_id = this.dataFetched[newData.length - 1].date;
            console.log('appl_id',this.appl_id);
     for (let i = 0; i < newData.length; i++) {
        this.property.push(newData[i]);
     }
} else {
    this.noRecords = true;
     console.log("No user updates");
}
console.log('bpksp',this.appl_id);
},
err => {

}
);
resolve();
}, 500);
});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad BpkspapplicationPage');
  }

}
