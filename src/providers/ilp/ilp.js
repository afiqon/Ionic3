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
  Generated class for the IlpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = "http://132.148.150.216:1440";
var IlpProvider = /** @class */ (function () {
    function IlpProvider(http) {
        this.http = http;
        console.log('Hello IlpProvider Provider');
    }
    IlpProvider.prototype.findAllIlp = function () {
        return this.http.get(apiUrl + '/awam_ilp')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    IlpProvider.prototype.findByIdIlp = function (id) {
        return this.http.get(apiUrl + '/paparan_awam_ilp?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    IlpProvider.prototype.findIlpByState = function (id) {
        return this.http.get(apiUrl + '/awam_ilp_negeri?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    IlpProvider.prototype.findIlpDistrict = function (id) {
        return this.http.get(apiUrl + '/awam_ilp_daerah?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    IlpProvider.prototype.findByNameIlp = function (key) {
        return this.http.get(apiUrl + '/awam_ilp?key=' + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    IlpProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], IlpProvider);
    return IlpProvider;
}());
export { IlpProvider };
//# sourceMappingURL=ilp.js.map