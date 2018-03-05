import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IlpProvider } from '../../providers/ilp/ilp';
import { Ilp2Page } from '../ilp2/ilp2';
/**
 * Generated class for the IlpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ilp',
  templateUrl: 'ilp.html',
})
export class IlpPage {
	properties: Array<any>;
 	states:Array<any>;
   	public sState: any;
   	public districts: Array<any>;
    public selectedDistricts: any[];
    searchKey: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider,public ilpService: IlpProvider) {
  	// this.findAll();
  	this.findStates();
  	this.findDistrict();
  }
goHome(){
	this.navCtrl.setRoot(IndexPage);
}
onInput(event) {
        this.ilpService.findByNameIlp(this.searchKey)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
            console.log(this.properties);
    }
onCancel(event) {
       this.properties=[];
       // this.states=[];
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
   this.ilpService.findIlpByState(sState.sta_id)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));

        this.selectedDistricts = this.districts.filter(district => district.sta_id == sState.sta_id);
        console.log(this.selectedDistricts);
    }
   setCityValues(sDistrict) {
       this.ilpService.findIlpDistrict(sDistrict.district_id)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);

    }
findAll() {
        this.ilpService.findAllIlp()
            .then(data => this.properties = data)
            .catch(error => alert(error));
            
    }
openPropertyDetail(property: any) {
        this.navCtrl.push(Ilp2Page, property);
        console.log(property);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad IlpPage');
  }

}
