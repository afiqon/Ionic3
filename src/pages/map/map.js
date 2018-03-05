var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.property = this.navParams.data.property;
        this.comName = this.navParams.data.comName;
        console.log('company name', this.comName);
    }
    // displayGoogleMap() {
    //   let latLng = new google.maps.LatLng(28.6117993, 77.2194934);
    //   let mapOptions = {
    //     center: latLng,
    //     disableDefaultUI: true,
    //     zoom: 18,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // }
    MapPage.prototype.findMap = function (id) {
        var _this = this;
        this.authService.findMap(id)
            .then(function (data) {
            _this.users = data;
            _this.prop = _this.users[0];
            console.log('prop value', _this.prop);
        });
    };
    MapPage.prototype.addMarkersToMap = function () {
        var position = new google.maps.LatLng(this.property.geometry.location.lat, this.property.geometry.location.lng);
        var dogwalkMarker = new google.maps.Marker({ position: position, title: this.comName });
        dogwalkMarker.setMap(this.map);
    };
    MapPage.prototype.loadgoogle = function () {
        //   if(this.property.geometry.location.lat==4.210484&&this.property.geometry.location.lng==101.975766){
        //      this.findMap(this.comName);
        //      console.log('if not found',this.prop.geometry)
        //      let posMaceio = { lat: 1.4883267, lng:103.7606878  }
        // this.map = new google.maps.Map(this.mapElement.nativeElement, {
        //   zoom: 18,
        //   center: posMaceio,
        //   mapTypeId: 'roadmap'
        // });
        // this.map.setCenter(posMaceio);
        // this.addMarkersToMap();
        //    }
        var lats;
        var long;
        lats = this.property.geometry.location.lat;
        long = this.property.geometry.location.lng;
        var posMaceio = { lat: lats, lng: long };
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18,
            center: posMaceio,
            mapTypeId: 'roadmap'
        });
        this.map.setCenter(posMaceio);
        this.addMarkersToMap();
    };
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadgoogle();
        console.log('ionViewDidLoad MapPage');
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-map',
            templateUrl: 'map.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AuthServiceProvider])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map