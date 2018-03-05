import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
   this.findStates();
     this.findDistrict();
  }
goHome() {
       this.navCtrl.setRoot(IndexPage);
    }
    findAll() {
        this.authService.findAllTobtab()
            .then(data => this.properties = data)
            .catch(error => alert(error));
            
    }
    onInput(event) {
        this.authService.findByNameTobtab(this.searchKey)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
            console.log(this.properties);
    }

    onCancel(event) {
        this.findAll();
    }
    openPropertyDetail(property: any) {
        this.navCtrl.push(Tobtab2Page, property);
        console.log(property);
    }
     findStates() {
        this.authService.findStates()
            .then(data => this.states = data)
            .catch(error => alert(error));
            
    }
    findDistrict(){
 this.authService.findDistrict()
            .then(data => this.districts = data)
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
