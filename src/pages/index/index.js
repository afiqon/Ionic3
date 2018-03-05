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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TestPage } from '../test/test';
import { TobtabPage } from '../tobtab/tobtab';
import { BpkspPage } from '../bpksp/bpksp';
import { IlpPage } from '../ilp/ilp';
import { AduanPage } from '../aduan/aduan';
import { SpipPage } from '../spip/spip';
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        var data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            this.userDetails = data.userData;
            if (data.userData.type_id == 1) {
                var alert_1 = alertCtrl.create({
                    title: 'Lesen anda akan tamat',
                    subTitle: 'Sila Buat Pembaharuan Lesen',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }
        else {
            this.userDetails = "";
        }
    }
    IndexPage_1 = IndexPage;
    IndexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndexPage');
    };
    IndexPage.prototype.backToWelcome = function () {
        this.navCtrl.setRoot(IndexPage_1);
        var alert = this.alertCtrl.create({
            title: 'Logged out!',
            subTitle: 'Successfully',
            buttons: ['OK']
        });
        alert.present();
    };
    IndexPage.prototype.logout = function () {
        //Api Token Logout
        var _this = this;
        localStorage.clear();
        setTimeout(function () { return _this.backToWelcome(); }, 1000);
    };
    IndexPage.prototype.pemandu = function () {
        if (this.userDetails.type_id == 1) {
            this.navCtrl.push(SpipPage);
        }
        else
            this.navCtrl.setRoot(TestPage);
    };
    IndexPage.prototype.tobtab = function () {
        this.navCtrl.setRoot(TobtabPage);
    };
    IndexPage.prototype.bpksp = function () {
        this.navCtrl.setRoot(BpkspPage);
    };
    IndexPage.prototype.ilp = function () {
        this.navCtrl.setRoot(IlpPage);
    };
    IndexPage.prototype.login = function () {
        this.navCtrl.setRoot(HomePage);
    };
    IndexPage.prototype.aduan = function () {
        this.navCtrl.setRoot(AduanPage);
    };
    IndexPage = IndexPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-index',
            templateUrl: 'index.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], IndexPage);
    return IndexPage;
    var IndexPage_1;
}());
export { IndexPage };
//# sourceMappingURL=index.js.map