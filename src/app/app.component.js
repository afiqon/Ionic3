var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { App } from 'ionic-angular';
import { IndexPage } from '../pages/index/index';
import { TestPage } from '../pages/test/test';
import { TobtabPage } from '../pages/tobtab/tobtab';
import { BpkspPage } from '../pages/bpksp/bpksp';
import { IlpPage } from '../pages/ilp/ilp';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl, appCtrl) {
        this.alertCtrl = alertCtrl;
        this.appCtrl = appCtrl;
        this.rootPage = IndexPage;
        var data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            this.userDetails = data.userData;
        }
        else {
            this.userDetails = "";
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goHome = function () {
        this.nav.setRoot(TestPage);
    };
    MyApp.prototype.goHome2 = function () {
        this.nav.setRoot(IndexPage);
    };
    MyApp.prototype.tobtab = function () {
        this.nav.setRoot(TobtabPage);
    };
    MyApp.prototype.bpksp = function () {
        this.nav.setRoot(BpkspPage);
    };
    MyApp.prototype.ilp = function () {
        this.nav.setRoot(IlpPage);
    };
    MyApp.prototype.backToWelcome = function () {
        this.appCtrl.getRootNav().setRoot(IndexPage);
        window.location.reload();
        var alert = this.alertCtrl.create({
            title: 'Logged out!',
            subTitle: 'Successfully',
            buttons: ['OK']
        });
        alert.present();
    };
    MyApp.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, AlertController, App])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map