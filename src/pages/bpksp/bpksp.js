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
import { BpkspProvider } from '../../providers/bpksp/bpksp';
import { Bksp2Page } from '../bksp2/bksp2';
/**
 * Generated class for the BpkspPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BpkspPage = /** @class */ (function () {
    function BpkspPage(navCtrl, navParams, bpkspService, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bpkspService = bpkspService;
        this.authService = authService;
        this.searchKey = "";
        // this.findAll();
        this.findStates();
        this.findDistrict();
    }
    BpkspPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    BpkspPage.prototype.onInput = function (event) {
        var _this = this;
        this.bpkspService.findByNameBpksp(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        console.log(this.properties);
    };
    BpkspPage.prototype.onCancel = function (event) {
        this.properties = [];
    };
    BpkspPage.prototype.findAll = function () {
        var _this = this;
        this.bpkspService.findAllBpksp()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    BpkspPage.prototype.findStates = function () {
        var _this = this;
        this.bpkspService.findStates()
            .then(function (data) { return _this.states = data; })
            .catch(function (error) { return alert(error); });
    };
    BpkspPage.prototype.findDistrict = function () {
        var _this = this;
        this.authService.findDistrict()
            .then(function (data) { return _this.districts = data; })
            .catch(function (error) { return alert(error); });
    };
    BpkspPage.prototype.setDistrictValues = function (sState) {
        var _this = this;
        this.bpkspService.findBpkspState(sState.sta_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        this.selectedDistricts = this.districts.filter(function (district) { return district.sta_id == sState.sta_id; });
        console.log(this.selectedDistricts);
    };
    BpkspPage.prototype.setCityValues = function (sDistrict) {
        var _this = this;
        this.bpkspService.findBpkspDistrict(sDistrict.district_id)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        // this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    };
    BpkspPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(Bksp2Page, property);
        console.log(property);
    };
    BpkspPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BpkspPage');
    };
    BpkspPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-bpksp',
            templateUrl: 'bpksp.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, BpkspProvider, AuthServiceProvider])
    ], BpkspPage);
    return BpkspPage;
}());
export { BpkspPage };
//# sourceMappingURL=bpksp.js.map