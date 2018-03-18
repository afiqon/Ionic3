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
import { TobtabkuiriPage } from '../tobtabkuiri/tobtabkuiri';
/**
 * Generated class for the TobtabaddbranchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TobtabaddbranchPage = /** @class */ (function () {
    function TobtabaddbranchPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.blabla(this.userDetails.usr_id);
    }
    TobtabaddbranchPage.prototype.blabla = function (id) {
        var _this = this;
        this.authService.findTobtabAddBranch(id).then(function (property) { return _this.property = property; });
        // debugger;
        console.log(this.property);
    };
    TobtabaddbranchPage.prototype.openKuiri = function (x) {
        this.navCtrl.push(TobtabkuiriPage, x);
        console.log(x);
    };
    TobtabaddbranchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TobtabaddbranchPage');
    };
    TobtabaddbranchPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tobtabaddbranch',
            templateUrl: 'tobtabaddbranch.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], TobtabaddbranchPage);
    return TobtabaddbranchPage;
}());
export { TobtabaddbranchPage };
//# sourceMappingURL=tobtabaddbranch.js.map