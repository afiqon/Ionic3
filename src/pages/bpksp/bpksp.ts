import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IndexPage} from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { BpkspProvider } from '../../providers/bpksp/bpksp';
import {Bksp2Page} from '../bksp2/bksp2';
/**
 * Generated class for the BpkspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bpksp',
  templateUrl: 'bpksp.html',
})
export class BpkspPage {
properties: Array<any>;
 states:Array<any>;
   public sState: any;
   public districts: Array<any>;
    public selectedDistricts: any[];
    searchKey: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,public bpkspService: BpkspProvider,public authService: AuthServiceProvider) {
  	// this.findAll();
  	this.findStates();
  	this.findDistrict();

  }
goHome(){
	this.navCtrl.setRoot(IndexPage);
}
onInput(event) {
        this.bpkspService.findByNameBpksp(this.searchKey)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
            console.log(this.properties);
    }

onCancel(event) {
       this.properties=[];
    }
 findAll() {
        this.bpkspService.findAllBpksp()
            .then(data => this.properties = data)
            .catch(error => alert(error));
            
    }
 findStates() {
        this.bpkspService.findStates()
            .then(data => this.states = data)
            .catch(error => alert(error));
            
    }
findDistrict(){
 this.authService.findDistrict()
            .then(data => this.districts = data)
            .catch(error => alert(error));
    }
  setDistrictValues(sState) {
   this.bpkspService.findBpkspState(sState.sta_id)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));

        this.selectedDistricts = this.districts.filter(district => district.sta_id == sState.sta_id);
        console.log(this.selectedDistricts);
    }
    setCityValues(sDistrict) {
       this.bpkspService.findBpkspDistrict(sDistrict.district_id)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);

    }

      openPropertyDetail(property: any) {
        this.navCtrl.push(Bksp2Page, property);
        console.log(property);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BpkspPage');
  }

}
