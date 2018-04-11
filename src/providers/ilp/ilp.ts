import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';;
/*
  Generated class for the IlpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = "http://150.242.180.103:1440/";
@Injectable()
export class IlpProvider {

  constructor(public http: Http) {
    console.log('Hello IlpProvider Provider');
  }
 findAllIlp(){
      return this.http.get(apiUrl+'/awam_ilp')
            .map(res => res.json())
            .toPromise();
  }
  findByIdIlp(id){
return this.http.get(apiUrl+'/paparan_awam_ilp?id='+id)
            .map(res => res.json())
            .toPromise();
  }
 findIlpByState(id){
 	return this.http.get(apiUrl+'/awam_ilp_negeri?id='+id)
            .map(res => res.json())
            .toPromise();
 }
 findIlpDistrict(id){
 	return this.http.get(apiUrl+'/awam_ilp_daerah?id='+id)
            .map(res => res.json())
            .toPromise();
 }
 findByNameIlp(key:string){
 return this.http.get(apiUrl+'/awam_ilp?key='+key)
            .map(res => res.json())
            .toPromise();
 }
}
