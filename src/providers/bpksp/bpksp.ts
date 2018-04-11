import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';;

/*
  Generated class for the BpkspProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = "http://150.242.180.103:1440/";
@Injectable()
export class BpkspProvider {

  constructor(public http : Http) {
    console.log('Hello BpkspProvider Provider');
  }
 findAllBpksp(){
      return this.http.get(apiUrl+'/bpksp_awam')
            .map(res => res.json())
            .toPromise();
  }
  findStates() {

     return this.http.get(apiUrl+'/negeri_bpksp')
            .map(res => res.json())
            .toPromise();
  }
  findBpkspState(id){
  	return this.http.get(apiUrl+'/bpksp_awam_negeri?id='+id)
            .map(res => res.json())
            .toPromise();
  }
  findByIdBpksp(id){
  	return this.http.get(apiUrl+'/bpksp_awam_papar?id='+id)
            .map(res => res.json())
            .toPromise();
  }
  findBpkspDistrict(id){
  	return this.http.get(apiUrl+'/bpksp_awam_daerah?id='+id)
            .map(res => res.json())
            .toPromise();
  }
  findByNameBpksp(key:string){
  	return this.http.get(apiUrl+"/bpksp_awam?key="+key)
            .map(res => res.json())
            .toPromise();
  }
}
