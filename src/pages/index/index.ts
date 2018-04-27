import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform } from 'ionic-angular';
import {HomePage} from '../home/home';
import {TestPage} from '../test/test';
import {TobtabPage} from '../tobtab/tobtab';
import {BpkspPage} from '../bpksp/bpksp';
import {IlpPage} from '../ilp/ilp';
import { AduanPage } from '../aduan/aduan';
import { SpipPage } from '../spip/spip';
import { SpiptobtabPage } from '../spiptobtab/spiptobtab';
import { SpipbpkspPage } from '../spipbpksp/spipbpksp';
import { SpipilpPage } from '../spipilp/spipilp';
import { HotelPage } from '../hotel/hotel';
import { SpiphotelPage } from '../spiphotel/spiphotel';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PenguatkuasaPage } from '../penguatkuasa/penguatkuasa';
import { SpaPage } from '../spa/spa';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  property: any;
  public userDetails: any;
  public resposeData: any;
  public NotiArray: any;
  public noRecords: boolean;
  public ModuleBpksp : any;
  public ModuleIlp : any
   public ModuleHotel : any
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public authService: AuthServiceProvider,private plt: Platform, private localNotifications: LocalNotifications) {
    const data = JSON.parse(localStorage.getItem("userData"));
      this.plt.ready().then((readySource) => {
        //notification 
              this.localNotifications.on('click', (notification, state) => {
                let json = JSON.parse(notification.data);
           
                let alert = alertCtrl.create({
                  title: notification.title,
                  subTitle: json.mydata,
                   buttons: ['OK']
                });
                alert.present();
              })
            });


      if(data){
     this.userDetails = data.userData;
     if(data.userData.type_id==1)
{
 this.findTgExpired(data.userData.usr_id);
}
     if(data.userData.type_id==2)
      {
        this.findExpiredTobtab(data.userData.usr_id);

        this.findKuiri(data.userData.usr_id);
        this.findBpksp(data.userData.usr_id);
        this.findIlp(data.userData.usr_id);
      }
  }
   else{
     this.userDetails="";
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
backToWelcome() {
  
    this.navCtrl.setRoot(IndexPage);
    let alert = this.alertCtrl.create({
    title: 'Logged out!',
    subTitle: 'Successfully',
    buttons: ['OK']
  });
  alert.present();
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  findTgExpired(id)
  {
 this.authService.findTgExpired(this.userDetails.usr_id).then(data => {
      
//do here what you want
 if(data[0])
 {
   this.localNotifications.schedule({
    id: 1,
    title: 'Lesen TG anda akan tamat dalam tempoh 60 hari',
    text: 'Sila Mohon Pembaharuan Lesen',
    data: { mydata: 'Sila Mohon Pembaharuan Lesen' },
    at: new Date(new Date().getTime() + 2 * 1000)
  });
  }
    })

 }

  findExpiredTobtab(id)
  {
 this.authService.findTobtabExpired(this.userDetails.usr_id).then(data => {
      console.log(data);
//do here what you want
 if(data[0])
 {
   this.localNotifications.schedule({
    id: 1,
    title: 'Lesen anda akan tamat dalam tempoh 60 hari',
    text: 'Sila Mohon Pembaharuan Lesen',
    data: { mydata: 'Sila Mohon Pembaharuan Lesen' },
    at: new Date(new Date().getTime() + 2 * 1000)
  });
  }
    })

 }

   findKuiri(id)
  {
 this.authService.findTobtabKuiri(this.userDetails.usr_id).then(data => {
      console.log(data);
      this.NotiArray=data[0].count;
//do here what you want
 if(data[0].count>0)
 {
   this.localNotifications.schedule({
    id: 2,
    title: 'Terdapat '+data[0].count+' kuiri',
    text: 'Sila semak kuiri anda',
    data: { mydata: 'Sila semak kuiri anda' },
    at: new Date(new Date().getTime() + 4 * 1000)
  });
  }
    })

 }
  findBpksp(id){
    this.authService.findBPSKP(id).then(data=>{

      if(data.length>0){
      
      this.ModuleBpksp=1;  
      }

    })
    //notification
    this.authService.BpkspExpired(this.userDetails.usr_id).then(data => {
                console.log(data);
          //do here what you want
           if(data[0])
           {
             this.localNotifications.schedule({
              id: 1,
              title: 'Lesen BPKSP anda akan tamat dalam tempoh 60 hari',
              text: 'Sila Mohon Pembaharuan Lesen',
              data: { mydata: 'Sila Mohon Pembaharuan Lesen' },
              at: new Date(new Date().getTime() + 2 * 1000)
            });
            }
              })
  }
  findIlp(id){
    this.authService.findILP(id).then(data=>{

      if(data.length>0){
      
      this.ModuleIlp=1;  
      }

    })
    //notification ILP 
     this.authService.ILPExpired(this.userDetails.usr_id).then(data => {
                console.log(data);
          //do here what you want
           if(data[0])
           {  
             this.localNotifications.schedule({
              id: 1,
              title: 'Lesen ILP anda akan tamat dalam tempoh 60 hari',
              text: 'Sila Mohon Pembaharuan Lesen',
              data: { mydata: 'Sila Mohon Pembaharuan Lesen' },
              at: new Date(new Date().getTime() + 2 * 1000)
            });
            }
              })
  }
  pemandu(){
    //if logged in and type_id is 1
    if(this.userDetails.type_id==1)
    {
      this.navCtrl.push(SpipPage);
    }
    else
    this.navCtrl.setRoot(TestPage);
  }

  tobtab(){
      if(this.userDetails.type_id==2)
    {
      this.navCtrl.push(SpiptobtabPage);
    }
    else
    this.navCtrl.setRoot(TobtabPage);
  }

  bpksp(){
      if(this.userDetails.type_id==2)
      {
        this.navCtrl.push(SpipbpkspPage);
      }
      else{
         this.navCtrl.setRoot(BpkspPage);
      }
   
  }

  ilp(){//SpipilpPage
    if(this.userDetails.type_id==2)
    {
      this.navCtrl.push(SpipilpPage);
    }
    else{
    this.navCtrl.setRoot(IlpPage);
    }

  }

  hotel(){
     if(this.userDetails.type_id==2)
    {
      this.navCtrl.push(SpiphotelPage);
    }
      else if(this.userDetails.type_id==10){
         this.navCtrl.push(PenguatkuasaPage);
      }
    else{
    this.navCtrl.setRoot(HotelPage);
    }
  }
  spa()
  {    
    this.navCtrl.push(SpaPage);
  }
  login()
  {
    this.navCtrl.setRoot(HomePage);
  }

  aduan()
  {
    this.navCtrl.setRoot(AduanPage);

  }
}
