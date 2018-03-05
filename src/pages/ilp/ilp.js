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
import { IndexPage } from '../index/index';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { IlpProvider } from '../../providers/ilp/ilp';
import { Ilp2Page } from '../ilp2/ilp2';
/**
 * Generated class for the IlpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IlpPage = /** @class */ (function () {
    function IlpPage(navCtrl, navParams, authService, ilpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.ilpService = ilpService;
        this.searchKey = "";
        // this.findAll();
        this.findStates();
        this.findDistrict();
    }
    IlpPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    IlpPage.prototype.onInput = function (event) {
        var _this = this;
        this.ilpService.findByNameIlp(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        console.log(this.properties);
    };
    IlpPage.prototype.onCancel = function (event) {
        this.properties = [];
        // this.states=[];
    };
    IlpPage.prototype.findStates = function () {
        var _this = this;
        this.authService.findStates()
            .then(function (data) { return _this.states = data; })
            .catch(function (error) { return alert(error); });
    };
    IlpPage.prototype.findDistrict = function () {
        var _this = this;
        this.authService.findDistrict()
            .then(function (data) { return _this.districts = data; })
            .catch(function (error) { return alert(error); });
    };
    IlpPage.prototype.setDistrictValues = function (sState) {
        var _this = this;
        this.ilpService.findIlpByState(sState.sta_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        this.selectedDistricts = this.districts.filter(function (district) { return district.sta_id == sState.sta_id; });
        console.log(this.selectedDistricts);
    };
    IlpPage.prototype.setCityValues = function (sDistrict) {
        var _this = this;
        this.ilpService.findIlpDistrict(sDistrict.district_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    };
    IlpPage.prototype.findAll = function () {
        var _this = this;
        this.ilpService.findAllIlp()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    IlpPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(Ilp2Page, property);
        console.log(property);
    };
    IlpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IlpPage');
    };
    IlpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-ilp',
            templateUrl: 'ilp.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider, IlpProvider])
    ], IlpPage);
    return IlpPage;
}());
export { IlpPage };
//# sourceMappingURL=ilp.js.map