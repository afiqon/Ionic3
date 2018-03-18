import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {IndexPage} from '../index/index';
import {Tobtab2Page} from '../tobtab2/tobtab2';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TobtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tobtab',
  templateUrl: 'tobtab.html',
})
export class TobtabPage {
 properties: Array<any>;
  states:Array<any>;
   public sState: any;
   public districts: Array<any>;
    public selectedDistricts: any[];
  searchKey: string = "";
   loader:any;
   public dataFetched:any;
  public appl_id:number = 0;
   public noRecords: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider, public loadingCtrl: LoadingController) {
   this.findStates();
   this.findDistrict();
       //loading message
       // this.findAll();
   this.loader = this.loadingCtrl.create({
         content: `
      <ion-spinner name="bubbles"></ion-spinner>`,
    });  

  }
goHome() {
       this.navCtrl.setRoot(IndexPage);
    }
    findAll() {
        this.authService.findAllTobtab(this.appl_id)
            .then(data => {
     this.dataFetched = data;
     if (this.dataFetched) {
        this.properties = this.dataFetched;
        // Data set length
        const dataLength = this.dataFetched.length;
        this.appl_id = this.dataFetched[dataLength - 1].appl_id;
      } else {
       console.log("No data");
     }
})
            .catch(error => alert(error));
            
    }

    //infinite scroll implementation
//     doInfinite(e): Promise<any> {
// console.log("Begin async operation");
//    return new Promise(resolve => {
//    setTimeout(() => {
//       this.authService.findAllTobtab(this.appl_id).then(
//       result => {
//          this.dataFetched = result;
//          if (this.dataFetched.length) {
//             const newData = this.dataFetched;
//             this.appl_id = this.dataFetched[newData.length - 1].appl_id;
//             console.log('appl_id',this.appl_id);
//      for (let i = 0; i < newData.length; i++) {
//         this.properties.push(newData[i]);
//      }
// } else {
//     this.noRecords = true;
//      console.log("No user updates");
// }
// },
// err => {

// }
// );
// resolve();
// }, 500);
// });
// }

    onInput(event) {
        this.authService.findByNameTobtab(this.searchKey)
            .then(data => {
                this.properties = data;
          
            })
            .catch(error => alert(JSON.stringify(error)));
            
    }

    onCancel(event) {
        this.properties=[];
    }
    openPropertyDetail(property: any) {
        this.navCtrl.push(Tobtab2Page, property);
        console.log(property);
    }
     findStates() {
        this.authService.findStates()
            .then(data => {this.states = data
            
            })
            .catch(error => alert(error));
            
    }
    findDistrict(){
 this.authService.findDistrict()
            .then(data => {this.districts = data
             
            })
            .catch(error => alert(error));
    }
     setDistrictValues(sState) {
      
   this.authService.findTobtabState(sState.sta_id)
            .then(data => {
                this.properties = data;
               
                           })
            .catch(error => alert(JSON.stringify(error)));

        this.selectedDistricts = this.districts.filter(district => district.sta_id == sState.sta_id);
        console.log(this.selectedDistricts);
    }
    setCityValues(sDistrict) {
       this.authService.findTobtabDistrict(sDistrict.district_id)
            .then(data => {
                this.properties = data;
              
            })
            .catch(error => alert(JSON.stringify(error)));
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);

    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TobtabPage');
  }

}
