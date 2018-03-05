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
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
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
  public dataSet: any;
  public noRecords: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public authService: AuthServiceProvider,private plt: Platform, private localNotifications: LocalNotifications) {
    const data = JSON.parse(localStorage.getItem("userData"));
      this.plt.ready().then((readySource) => {
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
  let alert = alertCtrl.create({
        title: 'Lesen anda akan tamat',
        subTitle: 'Sila Buat Pembaharuan Lesen',
         buttons: ['OK']
      });
      alert.present();
}
     if(data.userData.type_id==2)
      {
        this.findExpiredTobtab(data.userData.usr_id);
        this.findKuiri(data.userData.usr_id);
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
      this.dataSet=data[0].count;
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
    this.navCtrl.setRoot(BpkspPage);
  }
  ilp(){
    this.navCtrl.setRoot(IlpPage);
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
