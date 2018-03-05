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
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { IndexPage } from '../index/index';
/**
 * Generated class for the AduanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AduanPage = /** @class */ (function () {
    function AduanPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.todo = {};
    }
    AduanPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    AduanPage.prototype.logForm = function () {
        console.log(this.todo);
        this.http.post('http://localhost:1440/mail', this.todo).pipe(map(function (res) { return res.json(); })).subscribe(function (response) {
            console.log('POST Response:', response);
        });
        var alert = this.alertCtrl.create({
            title: 'Aduan telah ',
            subTitle: 'Berjaya dihantar',
            buttons: ['OK']
        });
        alert.present();
    };
    AduanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AduanPage');
    };
    AduanPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-aduan',
            templateUrl: 'aduan.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Http, AlertController])
    ], AduanPage);
    return AduanPage;
}());
export { AduanPage };
//# sourceMappingURL=aduan.js.map