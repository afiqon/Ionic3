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
import { TgdetailPage } from '../tgdetail/tgdetail';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.searchKey = "";
        this.userData = { "username": "", "password": "", "email": "", "name": "" };
        this.findAll();
        this.findStates();
        this.findDistrict();
    }
    TestPage.prototype.goHome = function () {
        this.navCtrl.setRoot(IndexPage);
    };
    TestPage.prototype.signup = function () {
        var _this = this;
        if (this.userData.username && this.userData.password && this.userData.email && this.userData.name) {
            //Api connections
            this.authService.postData(this.userData, "signup").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.userData) {
                    console.log(_this.resposeData);
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.navCtrl.push(IndexPage);
                }
                else {
                    // this.presentToast("Please give valid username and password");
                }
            }, function (err) {
                //Connection failed message
            });
        }
        else {
            console.log("Give valid information.");
        }
    };
    TestPage.prototype.findAll = function () {
        var _this = this;
        this.authService.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    TestPage.prototype.findStates = function () {
        var _this = this;
        this.authService.findStates()
            .then(function (data) { return _this.states = data; })
            .catch(function (error) { return alert(error); });
    };
    TestPage.prototype.findDistrict = function () {
        var _this = this;
        this.authService.findDistrict()
            .then(function (data) { return _this.districts = data; })
            .catch(function (error) { return alert(error); });
    };
    TestPage.prototype.setDistrictValues = function (sState) {
        var _this = this;
        this.authService.findByName(sState.sta_name)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
        this.selectedDistricts = this.districts.filter(function (district) { return district.sta_id == sState.sta_id; });
        console.log(this.selectedDistricts);
    };
    TestPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(TgdetailPage, property);
        console.log(property);
    };
    TestPage.prototype.onInput = function (event) {
        var _this = this;
        this.authService.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    TestPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-test',
            templateUrl: 'test.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], TestPage);
    return TestPage;
}());
export { TestPage };
//# sourceMappingURL=test.js.map