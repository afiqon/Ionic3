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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { KuiriPage } from '../kuiri/kuiri';
/**
 * Generated class for the TgnewlicensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TgnewlicensePage = /** @class */ (function () {
    function TgnewlicensePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.items = [];
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = this.navParams.data;
        this.blabla(this.userDetails.usr_id);
    }
    TgnewlicensePage.prototype.loadPeople = function (id) {
        var _this = this;
        var data = [];
        this.authService.getUsers(id)
            .then(function (kuiri) {
            _this.kuiri = kuiri;
        });
    };
    TgnewlicensePage.prototype.blabla = function (id) {
        var _this = this;
        this.authService.findPermohonanbaru(id).then(function (property) { return _this.property = property; });
    };
    TgnewlicensePage.prototype.openKuiri = function (x) {
        this.navCtrl.push(KuiriPage, x);
        console.log(x);
    };
    TgnewlicensePage.prototype.ionViewWillEnter = function () {
    };
    TgnewlicensePage.prototype.ionViewDidEnter = function () {
    };
    TgnewlicensePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TgnewlicensePage');
    };
    TgnewlicensePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tgnewlicense',
            templateUrl: 'tgnewlicense.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], TgnewlicensePage);
    return TgnewlicensePage;
}());
export { TgnewlicensePage };
//# sourceMappingURL=tgnewlicense.js.map