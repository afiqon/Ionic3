import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {IndexPage} from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { App } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public authService: AuthServiceProvider,public appCtrl: App ) {
  const data = JSON.parse(localStorage.getItem("userData"));
  if(data){
    this.navCtrl.setRoot(IndexPage);
  }
  }

  signIn(){
  // 	console.log(this.uname.value, this.password.value); 
  // 	if(this.uname.value=="admin" && this.password.value=="admin"){
  // 		 let alert = this.alertCtrl.create({
  //   title: 'Login Successful!',
  //   subTitle: 'You are logged in',
  //   buttons: ['OK']
  // });
  // alert.present();
  // this.navCtrl.push(IndexPage);
  // 	}
  //   else{
  //      let alert = this.alertCtrl.create({
  //   title: 'Login failed!',
  //   subTitle: 'Wrong credentials',
  //   buttons: ['OK']
  // });
  // alert.present();
  //   }
  console.log(this.userData);
   
  }

  home(){
    this.navCtrl.setRoot(IndexPage);

  }
    login(){
   if(this.userData.username && this.userData.password){
          this.authService.postData(this.userData, "login").then((result) =>{
          this.responseData = result;
    console.log(this.responseData);
    if(this.responseData.userData){
      
         localStorage.setItem('userData', JSON.stringify(this.responseData) )
        this.appCtrl.getRootNav().setRoot(IndexPage);
        window.location.reload();  }
  else{
         let alert = this.alertCtrl.create({
        title: 'Login failed!',
        subTitle: 'Wrong credentials',
        buttons: ['OK']
      });
  alert.present();
  }
    


    }, (err) => {
      //Connection failed message
    });
   }
   else{
      let alert = this.alertCtrl.create({
    title: 'Login failed!',
    subTitle: 'Wrong credentials',
    buttons: ['OK']
  });
  alert.present();
   }
  
  }
}
