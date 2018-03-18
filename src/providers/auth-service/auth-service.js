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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
var apiUrl = "http://132.148.150.216:1440";
var apiTest = 'http://localhost:1440';
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthServiceProvider.prototype.findAll = function () {
        return this.http.get(apiUrl + '/pemandu_pelancong')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findStates = function () {
        return this.http.get(apiUrl + '/negeri')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findDistrict = function () {
        return this.http.get(apiUrl + '/daerah')
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findMap = function (id) {
        return this.http.get(apiUrl + '/geo?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //   findMap() {
    //   return new Promise(resolve => {
    //     this.http.get(apiUrl+'/geo').subscribe(data => {
    //       resolve(data);
    //     }, err => {
    //       console.log(err);
    //     });
    //   });
    // }
    AuthServiceProvider.prototype.findAllTobtab = function (id) {
        return this.http.get(apiTest + '/tobtab_awam_carian?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findById = function (id) {
        return this.http.get(apiUrl + '/pemandu_pelancong_dua?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findByIdTobtab = function (id) {
        return this.http.get(apiUrl + '/tobtab_awam_papar?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findByName = function (key) {
        return this.http.get(apiUrl + "/pemandu_pelancong_cari?key=" + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findByNameTobtab = function (key) {
        return this.http.get(apiUrl + "/tobtab_awam_carian2?key=" + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabState = function (id) {
        return this.http.get(apiUrl + '/tobtab_awam_negeri?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabDistrict = function (id) {
        return this.http.get(apiUrl + '/tobtab_awam_daerah?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabBranch = function (id) {
        return this.http.get(apiUrl + '/tobtab_cawangan?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findPermohonanbaru = function (id) {
        return this.http.get(apiUrl + '/permohonan_lesen_baru_tg?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findPembaharuan = function (id) {
        return this.http.get(apiUrl + '/pembaharuan_lesen_tg?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findKuiri = function (id) {
        return this.http.get(apiUrl + '/permohonan_kuiri?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabApplication = function (id) {
        return this.http.get(apiUrl + '/tobtab_mohon_lesen_baru?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabRenew = function (id) {
        return this.http.get(apiUrl + '/tobtab_renew_lesen?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //tobtab_tukar_status
    AuthServiceProvider.prototype.findTobtabStatus = function (id) {
        return this.http.get(apiUrl + '/tobtab_tukar_status?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //tambah bidang
    AuthServiceProvider.prototype.findTobtabAddField = function (id) {
        return this.http.get(apiUrl + '/tobtab_tambah_bidang?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabAddBranch = function (id) {
        return this.http.get(apiUrl + '/tobtab_tambah_cawangan?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabExpired = function (id) {
        return this.http.get(apiUrl + '/tobtab_expired?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.findTobtabKuiri = function (id) {
        return this.http.get(apiUrl + '/tobtab_kuiri_noti?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    //if user is tobtab 
    AuthServiceProvider.prototype.findBPSKP = function (id) {
        return this.http.get(apiTest + '/spipBpksp?id=' + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    AuthServiceProvider.prototype.getUsers = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(apiUrl + '/permohonan_kuiri?id=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers({ 'Content-Type': 'application/json' });
            _this.http.post(apiUrl + '/' + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());
export { AuthServiceProvider };
//# sourceMappingURL=auth-service.js.map