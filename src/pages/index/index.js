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
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TestPage } from '../test/test';
import { TobtabPage } from '../tobtab/tobtab';
import { BpkspPage } from '../bpksp/bpksp';
import { IlpPage } from '../ilp/ilp';
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
var IndexPage = /** @class */ (function () {
    function IndexPage(navCtrl, navParams, alertCtrl, authService, plt, localNotifications) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.plt = plt;
        this.localNotifications = localNotifications;
        var data = JSON.parse(localStorage.getItem("userData"));
        this.plt.ready().then(function (readySource) {
            //notification 
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertCtrl.create({
                    title: notification.title,
                    subTitle: json.mydata,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
        if (data) {
            this.userDetails = data.userData;
            if (data.userData.type_id == 1) {
                // let alert = alertCtrl.create({
                //       title: 'Lesen anda akan tamat',
                //       subTitle: 'Sila Buat Pembaharuan Lesen',
                //        buttons: ['OK']
                //     });
                //     alert.present();
            }
            if (data.userData.type_id == 2) {
                this.findExpiredTobtab(data.userData.usr_id);
                this.findKuiri(data.userData.usr_id);
                this.findBpksp(data.userData.usr_id);
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
    IndexPage.prototype.findExpiredTobtab = function (id) {
        var _this = this;
        this.authService.findTobtabExpired(this.userDetails.usr_id).then(function (data) {
            console.log(data);
            //do here what you want
            if (data[0]) {
                _this.localNotifications.schedule({
                    id: 1,
                    title: 'Lesen anda akan tamat dalam tempoh 60 hari',
                    text: 'Sila Mohon Pembaharuan Lesen',
                    data: { mydata: 'Sila Mohon Pembaharuan Lesen' },
                    at: new Date(new Date().getTime() + 2 * 1000)
                });
            }
        });
    };
    IndexPage.prototype.findKuiri = function (id) {
        var _this = this;
        this.authService.findTobtabKuiri(this.userDetails.usr_id).then(function (data) {
            console.log(data);
            _this.NotiArray = data[0].count;
            //do here what you want
            if (data[0].count > 0) {
                _this.localNotifications.schedule({
                    id: 2,
                    title: 'Terdapat ' + data[0].count + ' kuiri',
                    text: 'Sila semak kuiri anda',
                    data: { mydata: 'Sila semak kuiri anda' },
                    at: new Date(new Date().getTime() + 4 * 1000)
                });
            }
        });
    };
    IndexPage.prototype.findBpksp = function (id) {
        var _this = this;
        this.authService.findBPSKP(id).then(function (data) {
            if (data.length > 0) {
                _this.ModuleBpksp = 1;
            }
        });
    };
    IndexPage.prototype.pemandu = function () {
        //if logged in and type_id is 1
        if (this.userDetails.type_id == 1) {
            this.navCtrl.push(SpipPage);
        }
        else
            this.navCtrl.setRoot(TestPage);
    };
    IndexPage.prototype.tobtab = function () {
        if (this.userDetails.type_id == 2) {
            this.navCtrl.push(SpiptobtabPage);
        }
        else
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
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, AuthServiceProvider, Platform, LocalNotifications])
    ], IndexPage);
    return IndexPage;
    var IndexPage_1;
}());
export { IndexPage };
//# sourceMappingURL=index.js.map