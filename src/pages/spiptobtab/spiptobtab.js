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
import { TobtabapplicationPage } from '../tobtabapplication/tobtabapplication';
import { TobtabrenewPage } from '../tobtabrenew/tobtabrenew';
import { TobtabchangestatusPage } from '../tobtabchangestatus/tobtabchangestatus';
import { TobtabaddfieldPage } from '../tobtabaddfield/tobtabaddfield';
import { TobtabaddbranchPage } from '../tobtabaddbranch/tobtabaddbranch';
/**
 * Generated class for the SpiptobtabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpiptobtabPage = /** @class */ (function () {
    function SpiptobtabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = TobtabapplicationPage;
        this.tab2Root = TobtabrenewPage;
        this.tab3Root = TobtabchangestatusPage;
        this.tab4Root = TobtabaddfieldPage;
        this.tab5Root = TobtabaddbranchPage;
    }
    SpiptobtabPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpiptobtabPage');
    };
    SpiptobtabPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-spiptobtab',
            templateUrl: 'spiptobtab.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SpiptobtabPage);
    return SpiptobtabPage;
}());
export { SpiptobtabPage };
//# sourceMappingURL=spiptobtab.js.map