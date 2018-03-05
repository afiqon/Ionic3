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
import { BpkspProvider } from '../../providers/bpksp/bpksp';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MapPage } from '../map/map';
/**
 * Generated class for the Bksp2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Bksp2Page = /** @class */ (function () {
    function Bksp2Page(navCtrl, navParams, bpkspService, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bpkspService = bpkspService;
        this.authService = authService;
        this.property = this.navParams.data;
        this.bpkspService.findByIdBpksp(this.property.tobtab_id).then(function (property) { return _this.property = property; });
        console.log(this.property);
        this.findMap(this.property.appl_company_address);
    }
    Bksp2Page.prototype.findMap = function (id) {
        var _this = this;
        this.authService.findMap(id)
            .then(function (data) {
            _this.users = data;
            console.log('users value', _this.users);
        });
    };
    Bksp2Page.prototype.openMap = function (property, comName) {
        console.log('openmap property geo', property.geometry.location.lat);
        this.navCtrl.push(MapPage, {
            property: property,
            comName: comName,
        });
        console.log(property);
    };
    Bksp2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Bksp2Page');
    };
    Bksp2Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-bksp2',
            templateUrl: 'bksp2.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, BpkspProvider, AuthServiceProvider])
    ], Bksp2Page);
    return Bksp2Page;
}());
export { Bksp2Page };
//# sourceMappingURL=bksp2.js.map