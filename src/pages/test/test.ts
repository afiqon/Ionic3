import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import {IndexPage} from '../index/index';
import {TgdetailPage} from '../tgdetail/tgdetail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public sState: any;
   public districts: Array<any>;
  properties: Array<any>;
  states:Array<any>;
  searchKey: string = "";
 resposeData : any;
  userData = {"username":"", "password":"","email":"","name":""};
 public selectedDistricts: any[];
 loader:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
     this.findAll();
     this.findStates();
     this.findDistrict();

     //loading message
     this.loader = this.loadingCtrl.create({
         content: `
      <ion-spinner name="bubbles"></ion-spinner>`,
    });  
this.loader.present();
  }
goHome() {
       this.navCtrl.setRoot(IndexPage);
    }
signup() {
    if(this.userData.username && this.userData.password && this.userData.email && this.userData.name){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.userData){
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(IndexPage);
    }
    else{
      // this.presentToast("Please give valid username and password");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }
  
  Onloading(){
    

  }

 findAll() {
        
    
        this.authService.findAll()
            .then(data => {this.properties = data
              console.log('pemandu pelacong',this.properties);
              this.loader.dismiss();
            })
            .catch(error => {
              this.onAlert();
            });
            
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
   this.authService.findByName(sState.sta_name)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));

        this.selectedDistricts = this.districts.filter(district => district.sta_id == sState.sta_id);
        console.log(this.selectedDistricts);
    }
openPropertyDetail(property: any) {
        this.navCtrl.push(TgdetailPage, property);
        console.log(property);
    }
      onInput(event) {
        this.authService.findByName(this.searchKey)
            .then(data => {
                this.properties = data;
               
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    onAlert(){
    let alert = this.alertCtrl.create
    ({
      title: 'Please Check Your connection!',
      subTitle: '',
      buttons: ['OK']
    });
  alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
