import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
let apiUrl = "http://150.242.180.103:1440";
let apiTest='http://localhost:1440';
@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }
  findAll() {

     return this.http.get(apiUrl+'/pemandu_pelancong')
            .map(res => res.json())
            .toPromise();
  }
    findStates() {

     return this.http.get(apiUrl+'/negeri')
            .map(res => res.json())
            .toPromise();
  }
  findDistrict() {

     return this.http.get(apiUrl+'/daerah')
            .map(res => res.json())
            .toPromise();
  }
  findMap(id:string){
    return this.http.get(apiUrl+'/geo?id='+id)
            .map(res => res.json())
            .toPromise();
  }
//   findMap() {
//   return new Promise(resolve => {
//     this.http.get(apiUrl+'/geo').subscribe(data => {
//       resolve(data);
//     }, err => {
//       console.log(err);
//     });
//   });
// }
//hotel
findHotelAll(){
     return this.http.get(apiUrl+'/hotel')
            .map(res => res.json())
            .toPromise();
}
  findAllTobtab(id){
      return this.http.get(apiUrl+'/tobtab_awam_carian?id='+id)
            .map(res => res.json())
            .toPromise();
  }
   findById(id) {
        return this.http.get(apiUrl+'/pemandu_pelancong_dua?id='+id)
            .map(res => res.json())
            .toPromise();
    }
    findByIdTobtab(id){
 return this.http.get(apiUrl+'/tobtab_awam_papar?id='+id)
            .map(res => res.json())
            .toPromise();
    }
    findByName(key:string) {
        return this.http.get(apiUrl+"/pemandu_pelancong_cari?key="+key)
            .map(res => res.json())
            .toPromise();
    }
    findByNameTobtab(key:string){
       return this.http.get(apiUrl+"/tobtab_awam_carian2?key="+key)
            .map(res => res.json())
            .toPromise();
    }
    findTobtabState(id){
       return this.http.get(apiUrl+'/tobtab_awam_negeri?id='+id)
            .map(res => res.json())
            .toPromise();
    }
    findTobtabDistrict(id){
      return this.http.get(apiUrl+'/tobtab_awam_daerah?id='+id)
            .map(res => res.json())
            .toPromise();
    }
    findTobtabBranch(id){
      return this.http.get(apiUrl+'/tobtab_cawangan?id='+id)
            .map(res => res.json())
            .toPromise();
    }
    findTgLesen(id){
   return this.http.get(apiUrl+'/senarai_lesen_tg?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
  findTgExpired(id){
   return this.http.get(apiUrl+'/tg_expired?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
     findPermohonanbaru(id){
   return this.http.get(apiUrl+'/permohonan_lesen_baru_tg?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
    findPembaharuan(id){
   return this.http.get(apiUrl+'/pembaharuan_lesen_tg?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
     findKuiri(id){
   return this.http.get(apiUrl+'/permohonan_kuiri?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
      findTobtabApplication(id){
   return this.http.get(apiUrl+'/tobtab_mohon_lesen_baru?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
  findTobtabRenew(id){
   return this.http.get(apiUrl+'/tobtab_renew_lesen?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
//tobtab_tukar_status
 findTobtabStatus(id){
   return this.http.get(apiUrl+'/tobtab_tukar_status?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
//tambah bidang
 findTobtabAddField(id){
   return this.http.get(apiUrl+'/tobtab_tambah_bidang?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
   findTobtabAddBranch(id){
   return this.http.get(apiUrl+'/tobtab_tambah_cawangan?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
   findTobtabExpired(id){
   return this.http.get(apiUrl+'/tobtab_expired?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
     findTobtabKuiri(id){
   return this.http.get(apiUrl+'/tobtab_kuiri_noti?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
  //if pengguna syarikat ada BPKSP
  findBPSKP(id){
 return this.http.get(apiUrl+'/spipBpksp?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  //bpksp mohon lesen baru
  BpkspApplication(id,date){
 return this.http.get(apiUrl+'/bpksp_lesen_baru?id='+id+'&date='+date)
             .map(res => res.json())
            .toPromise();
  }
  //bpksp pembahruan lesen
  BpkspRenew(id,date){
 return this.http.get(apiUrl+'/bpksp_pembaharuan?id='+id+'&date='+date)
             .map(res => res.json())
            .toPromise();
  }
  //bpksp ubah syarat lesen
   BpkspChangeCondition(id,date){
 return this.http.get(apiTest+'/bpksp_ubahsyarat?id='+id+'&date='+date)
             .map(res => res.json())
            .toPromise();
  }
  BpkspExpired(id){
   return this.http.get(apiUrl+'/bpksp_expired?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
  // if pengguna syarikat ad ILP
    findILP(id){
 return this.http.get(apiUrl+'/spipILP?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  //ILP lesen baru
  ILPApplication(id){
 return this.http.get(apiUrl+'/ilp_permohonan_lesen_baru?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  //ILP pembaharuan
  ILPRenew(id){
 return this.http.get(apiUrl+'/ilp_pembaharuan?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  //ILP tukar status
   ILPChangestatus(id){
 return this.http.get(apiUrl+'/ilp_tukarstatus?id='+id)
             .map(res => res.json())
            .toPromise();
  }
    //ILP tambah cawangan
   ILPAddbranch(id){
 return this.http.get(apiUrl+'/ilp_branch?id='+id)
             .map(res => res.json())
            .toPromise();
  }
   ILPPermit(id){
 return this.http.get(apiUrl+'/ilp_permit?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  ILPExpired(id){
   return this.http.get(apiUrl+'/ilp_expired?id='+id)
             .map(res => res.json())
            .toPromise();
  
  }
   HotelApplication(id){
 return this.http.get(apiUrl+'/hotelapplication?id='+id)
             .map(res => res.json())
            .toPromise();
  }
   HotelClassification(id){
 return this.http.get(apiUrl+'/hotelclassification?id='+id)
             .map(res => res.json())
            .toPromise();
  }
  getUsers(id) {
  return new Promise(resolve => {
    this.http.get(apiUrl+'/permohonan_kuiri?id='+id).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
//for login
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });

      this.http.post(apiUrl+'/'+type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}