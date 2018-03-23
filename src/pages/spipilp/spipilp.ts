import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IlpapplicationPage } from '../ilpapplication/ilpapplication';
import { IlprenewPage } from '../ilprenew/ilprenew';
import { IlpbranchPage } from '../ilpbranch/ilpbranch';
import { IlpchangestatusPage } from '../ilpchangestatus/ilpchangestatus';
import { IlppermitPage } from '../ilppermit/ilppermit';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SpipilpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spipilp',
  templateUrl: 'spipilp.html',
})
export class SpipilpPage {
tab1Root = IlpapplicationPage;
tab2Root= IlprenewPage;
tab3Root= IlpbranchPage;
tab4Root=IlpchangestatusPage;
tab5Root=IlppermitPage;
properties: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
 const data = JSON.parse(localStorage.getItem("userData"));
      
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SpipilpPage');
  }

}
