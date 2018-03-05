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
import { Tobtab2Page } from '../tobtab2/tobtab2';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TobtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TobtabPage = /** @class */ (function () {
    function TobtabPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.searchKey = "";
        this.findStates();
        this.findDistrict();
    }
    TobtabPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    TobtabPage.prototype.findAll = function () {
        var _this = this;
        this.authService.findAllTobtab()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    TobtabPage.prototype.onInput = function (event) {
        var _this = this;
        this.authService.findByNameTobtab(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        console.log(this.properties);
    };
    TobtabPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    TobtabPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(Tobtab2Page, property);
        console.log(property);
    };
    TobtabPage.prototype.findStates = function () {
        var _this = this;
        this.authService.findStates()
            .then(function (data) { return _this.states = data; })
            .catch(function (error) { return alert(error); });
    };
    TobtabPage.prototype.findDistrict = function () {
        var _this = this;
        this.authService.findDistrict()
            .then(function (data) { return _this.districts = data; })
            .catch(function (error) { return alert(error); });
    };
    TobtabPage.prototype.setDistrictValues = function (sState) {
        var _this = this;
        this.authService.findTobtabState(sState.sta_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        this.selectedDistricts = this.districts.filter(function (district) { return district.sta_id == sState.sta_id; });
        console.log(this.selectedDistricts);
    };
    TobtabPage.prototype.setCityValues = function (sDistrict) {
        var _this = this;
        this.authService.findTobtabDistrict(sDistrict.district_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    };
    TobtabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TobtabPage');
    };
    TobtabPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tobtab',
            templateUrl: 'tobtab.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], TobtabPage);
    return TobtabPage;
}());
export { TobtabPage };
//# sourceMappingURL=tobtab.js.map