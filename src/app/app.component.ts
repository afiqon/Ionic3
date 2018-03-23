import { Component, ViewChild } from '@angular/core';
import {Nav, Platform,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { App } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { TestPage } from '../pages/test/test';
import { TgdetailPage } from '../pages/tgdetail/tgdetail';
import { TobtabPage } from '../pages/tobtab/tobtab';
import { Tobtab2Page } from '../pages/tobtab2/tobtab2';
import { BpkspPage } from '../pages/bpksp/bpksp';
import { MapPage } from '../pages/map/map';
import { IlpPage } from '../pages/ilp/ilp';
import { Ilp2Page } from '../pages/ilp2/ilp2';
import { AduanPage } from '../pages/aduan/aduan';
import { SpipPage } from '../pages/spip/spip';
import { TgnewlicensePage } from '../pages/tgnewlicense/tgnewlicense';
import { TgrenewlicensePage} from '../pages/tgrenewlicense/tgrenewlicense';
import { KuiriPage } from '../pages/kuiri/kuiri';
import { SpiptobtabPage } from '../pages/spiptobtab/spiptobtab';
import { TobtabapplicationPage } from '../pages/tobtabapplication/tobtabapplication';
import { TobtabrenewPage } from '../pages/tobtabrenew/tobtabrenew';
import { TobtabchangestatusPage } from '../pages/tobtabchangestatus/tobtabchangestatus';
import { TobtabaddfieldPage } from '../pages/tobtabaddfield/tobtabaddfield';
import { TobtabaddbranchPage } from '../pages/tobtabaddbranch/tobtabaddbranch';
import { TobtabkuiriPage } from '../pages/tobtabkuiri/tobtabkuiri';
import { SpipbpkspPage } from '../pages/spipbpksp/spipbpksp';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;
  rootPage:any = IndexPage;
public userDetails: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl: AlertController,public appCtrl: App) {
    const data = JSON.parse(localStorage.getItem("userData"));
      if(data){
     this.userDetails = data.userData;
  }
   else{
     this.userDetails="";
   }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
   goHome() {
       this.nav.setRoot(TestPage);
    }
      goHome2() {
       this.nav.setRoot(IndexPage);
    }
    tobtab(){
      this.nav.setRoot(TobtabPage);
    }
    bpksp()
    {
       this.nav.setRoot(BpkspPage);
    }
    ilp(){
      this.nav.setRoot(IlpPage);
    }
backToWelcome() {
  
    this.appCtrl.getRootNav().setRoot(IndexPage);
    window.location.reload();
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
}

