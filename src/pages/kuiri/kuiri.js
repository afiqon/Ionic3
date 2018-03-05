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
/**
 * Generated class for the KuiriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KuiriPage = /** @class */ (function () {
    function KuiriPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.property = this.navParams.data;
    }
    KuiriPage.prototype.getkuiri = function (id) {
        var _this = this;
        this.authService.findKuiri(id)
            .then(function (kuiri) {
            _this.kuiri = kuiri;
        });
        console.log(this.kuiri);
    };
    KuiriPage.prototype.ionViewWillEnter = function () {
        this.getkuiri(this.property);
    };
    KuiriPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KuiriPage');
    };
    KuiriPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-kuiri',
            templateUrl: 'kuiri.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], KuiriPage);
    return KuiriPage;
}());
export { KuiriPage };
//# sourceMappingURL=kuiri.js.map