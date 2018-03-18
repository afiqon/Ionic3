var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
;
/*
  Generated class for the BpkspProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = "http://132.148.150.216:1440";
var BpkspProvider = /** @class */ (function () {
    function BpkspProvider(http) {
        this.http = http;
        console.log('Hello BpkspProvider Provider');
    }
    BpkspProvider.prototype.findAllBpksp = function () {
        return this.http.get(apiUrl + '/bpksp_awam')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider.prototype.findStates = function () {
        return this.http.get(apiUrl + '/negeri_bpksp')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider.prototype.findBpkspState = function (id) {
        return this.http.get(apiUrl + '/bpksp_awam_negeri?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider.prototype.findByIdBpksp = function (id) {
        return this.http.get(apiUrl + '/bpksp_awam_papar?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider.prototype.findBpkspDistrict = function (id) {
        return this.http.get(apiUrl + '/bpksp_awam_daerah?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider.prototype.findByNameBpksp = function (key) {
        return this.http.get(apiUrl + "/bpksp_awam?key=" + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BpkspProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], BpkspProvider);
    return BpkspProvider;
}());
export { BpkspProvider };
//# sourceMappingURL=bpksp.js.map