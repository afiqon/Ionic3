import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
declare const google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
   map: any;
  public dataSet: any;
  users: any;
  property:any;
  comName:any;
  prop:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthServiceProvider) {
  	 this.property = this.navParams.data.property;
     this.comName=this.navParams.data.comName;
       console.log('company name',this.comName);
    
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
 findMap(id:any) {
    this.authService.findMap(id)
    .then(data => {
      this.users = data;
      this.prop=this.users[0];
      console.log('prop value',this.prop);
    });
  }
  addMarkersToMap() {
  
      var position = new google.maps.LatLng(this.property.geometry.location.lat, this.property.geometry.location.lng);
      var dogwalkMarker = new google.maps.Marker({position: position, title: this.comName});
      dogwalkMarker.setMap(this.map);
    
  }
  loadgoogle(){
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
    let lats:any; let long:any; 
lats=this.property.geometry.location.lat;long=this.property.geometry.location.lng;
     let posMaceio = { lat: lats, lng: long}
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 18,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
    this.addMarkersToMap();
  
}
    
  ionViewDidLoad() {
  	  this.loadgoogle();
    console.log('ionViewDidLoad MapPage');
  }

}
