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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
    function TobtabPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.searchKey = "";
        this.appl_id = 0;
        this.findStates();
        this.findDistrict();
        //loading message
        this.findAll();
        this.loader = this.loadingCtrl.create({
            content: "\n      <ion-spinner name=\"bubbles\"></ion-spinner>",
        });
    }
    TobtabPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    TobtabPage.prototype.findAll = function () {
        var _this = this;
        this.authService.findAllTobtab(this.appl_id)
            .then(function (data) {
            _this.dataFetched = result;
            if (_this.dataFetched) {
                _this.properties = _this.dataFetched;
                // Data set length
                var dataLength = _this.dataFetched.length;
                _this.userPostData.lastCreated = _this.resposeData.feedData[dataLength - 1].created;
            }
            else {
                console.log("No data");
            }
        })
            .catch(function (error) { return alert(error); });
    };
    //infinite scroll implementation
    TobtabPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log("Begin async operation");
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.authService.findAllTobtab(_this.appl_id).then(function (result) {
                    _this.dataFetched = result;
                    if (_this.dataFetched.length) {
                        var newData = _this.dataFetched;
                        _this.appl_id = _this.dataFetched[newData.length - 1].appl_id;
                        console.log('appl_id', _this.appl_id);
                        for (var i = 0; i < newData.length; i++) {
                            _this.properties.push(newData[i]);
                        }
                    }
                    else {
                        _this.noRecords = true;
                        console.log("No user updates");
                    }
                }, function (err) {
                    //Connection failed message
                });
                resolve();
            }, 500);
        });
    };
    TobtabPage.prototype.onInput = function (event) {
        var _this = this;
        this.authService.findByNameTobtab(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    TobtabPage.prototype.onCancel = function (event) {
        this.properties = [];
    };
    TobtabPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(Tobtab2Page, property);
        console.log(property);
    };
    TobtabPage.prototype.findStates = function () {
        var _this = this;
        this.authService.findStates()
            .then(function (data) {
            _this.states = data;
        })
            .catch(function (error) { return alert(error); });
    };
    TobtabPage.prototype.findDistrict = function () {
        var _this = this;
        this.authService.findDistrict()
            .then(function (data) {
            _this.districts = data;
        })
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
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider, LoadingController])
    ], TobtabPage);
    return TobtabPage;
}());
export { TobtabPage };
//# sourceMappingURL=tobtab.js.map