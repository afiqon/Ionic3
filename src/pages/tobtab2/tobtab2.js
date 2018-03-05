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
import { MapPage } from '../map/map';
/**
 * Generated class for the Tobtab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tobtab2Page = /** @class */ (function () {
    function Tobtab2Page(navCtrl, navParams, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.property = this.navParams.data;
        this.authService.findByIdTobtab(this.property.usr_id).then(function (property) { return _this.property = property; });
        this.findMap(this.property.appl_company_address);
        this.findMapByName(this.property.appl_company_name);
        this.findTobtabBranch(this.property.usr_id);
        console.log(this.property);
    }
    Tobtab2Page.prototype.findMap = function (id) {
        var _this = this;
        this.authService.findMap(id)
            .then(function (data) {
            _this.users = data;
            console.log('users value', _this.users);
        });
    };
    Tobtab2Page.prototype.findMapByName = function (id) {
        var _this = this;
        this.authService.findMap(id)
            .then(function (data) {
            _this.name = data;
        });
    };
    Tobtab2Page.prototype.openMap = function (property, comName) {
        console.log('openmap property geo', property.geometry.location.lat);
        this.navCtrl.push(MapPage, {
            property: property,
            comName: comName,
        });
        console.log(property);
    };
    Tobtab2Page.prototype.findTobtabBranch = function (id) {
        var _this = this;
        this.authService.findTobtabBranch(id)
            .then(function (data) {
            _this.branchs = data;
        });
    };
    Tobtab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tobtab2Page');
    };
    Tobtab2Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tobtab2',
            templateUrl: 'tobtab2.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], Tobtab2Page);
    return Tobtab2Page;
}());
export { Tobtab2Page };
//# sourceMappingURL=tobtab2.js.map