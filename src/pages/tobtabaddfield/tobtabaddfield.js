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
 * Generated class for the TobtabaddfieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TobtabaddfieldPage = /** @class */ (function () {
    function TobtabaddfieldPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        var data = JSON.parse(localStorage.getItem("userData"));
        this.userDetails = data.userData;
        this.blabla(this.userDetails.usr_id);
    }
    TobtabaddfieldPage.prototype.blabla = function (id) {
        var _this = this;
        this.authService.findTobtabAddField(id).then(function (property) {
            _this.property = property;
            console.log('tambah bidang', _this.property);
            // this.property.filter(district => district.add_field_status_id == 2);
        });
    };
    TobtabaddfieldPage.prototype.openKuiri = function (x) {
        this.navCtrl.push(TobtabkuiriPage, x);
        console.log(x);
    };
    TobtabaddfieldPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TobtabaddfieldPage');
    };
    TobtabaddfieldPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tobtabaddfield',
            templateUrl: 'tobtabaddfield.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], TobtabaddfieldPage);
    return TobtabaddfieldPage;
}());
export { TobtabaddfieldPage };
//# sourceMappingURL=tobtabaddfield.js.map