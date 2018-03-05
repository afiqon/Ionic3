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
import { IlpProvider } from '../../providers/ilp/ilp';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MapPage } from '../map/map';
/**
 * Generated class for the Ilp2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Ilp2Page = /** @class */ (function () {
    function Ilp2Page(navCtrl, navParams, authService, ilpService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.ilpService = ilpService;
        this.property = this.navParams.data;
        this.ilpService.findByIdIlp(this.property.usr_id).then(function (property) { return _this.property = property; });
        console.log(this.property);
        this.findMap(this.property.company_address);
    }
    Ilp2Page.prototype.findMap = function (id) {
        var _this = this;
        this.authService.findMap(id)
            .then(function (data) {
            _this.users = data;
            console.log('users value', _this.users);
        });
    };
    Ilp2Page.prototype.openMap = function (property, comName) {
        console.log('openmap property geo', property.geometry.location.lat);
        this.navCtrl.push(MapPage, {
            property: property,
            comName: comName,
        });
        console.log(property);
    };
    Ilp2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ilp2Page');
    };
    Ilp2Page = __decorate([
        IonicPage(),
        Component({
            selector: 'page-ilp2',
            templateUrl: 'ilp2.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider, IlpProvider])
    ], Ilp2Page);
    return Ilp2Page;
}());
export { Ilp2Page };
//# sourceMappingURL=ilp2.js.map