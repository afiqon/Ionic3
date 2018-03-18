var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IndexPage } from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { App } from 'ionic-angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, authService, appCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.appCtrl = appCtrl;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
        var data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            this.navCtrl.setRoot(IndexPage);
        }
    }
    HomePage.prototype.signIn = function () {
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
    };
    HomePage.prototype.home = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    HomePage.prototype.login = function () {
        var _this = this;
        if (this.userData.username && this.userData.password) {
            this.authService.postData(this.userData, "login").then(function (result) {
                _this.responseData = result;
                console.log(_this.responseData);
                if (_this.responseData.userData) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData));
                    _this.appCtrl.getRootNav().setRoot(IndexPage);
                    window.location.reload();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Login failed!',
                        subTitle: 'Wrong credentials',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Login failed!',
                subTitle: 'Wrong credentials',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, AlertController, AuthServiceProvider, App])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map