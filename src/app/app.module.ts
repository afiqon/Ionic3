import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { TestPage } from '../pages/test/test';
import { TgdetailPage } from '../pages/tgdetail/tgdetail';
import { TobtabPage } from '../pages/tobtab/tobtab';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Tobtab2Page } from '../pages/tobtab2/tobtab2';
import { BpkspPage } from '../pages/bpksp/bpksp';
import { MapPage } from '../pages/map/map';
import { BpkspProvider } from '../providers/bpksp/bpksp';
import { Bksp2Page } from '../pages/bksp2/bksp2';
import { IlpPage } from '../pages/ilp/ilp';
import { Ilp2Page } from '../pages/ilp2/ilp2';
import { IlpProvider } from '../providers/ilp/ilp';
import { AduanPage } from '../pages/aduan/aduan';
import { SpipPage } from '../pages/spip/spip';
import { TgnewlicensePage } from '../pages/tgnewlicense/tgnewlicense';
import { KuiriPage } from '../pages/kuiri/kuiri';
import { TgrenewlicensePage} from '../pages/tgrenewlicense/tgrenewlicense';
import { SpiptobtabPage } from '../pages/spiptobtab/spiptobtab';
import { TobtabapplicationPage } from '../pages/tobtabapplication/tobtabapplication';
import { TobtabrenewPage } from '../pages/tobtabrenew/tobtabrenew';
import { TobtabchangestatusPage } from '../pages/tobtabchangestatus/tobtabchangestatus';
import { TobtabaddfieldPage } from '../pages/tobtabaddfield/tobtabaddfield';
import { TobtabaddbranchPage } from '../pages/tobtabaddbranch/tobtabaddbranch';
import { TobtabkuiriPage } from '../pages/tobtabkuiri/tobtabkuiri';
import { SpipbpkspPage } from '../pages/spipbpksp/spipbpksp';
import { BpkspapplicationPage } from '../pages/bpkspapplication/bpkspapplication';
import { BpksprenewPage } from '../pages/bpksprenew/bpksprenew';
import { BpkspchangeconditionPage } from '../pages/bpkspchangecondition/bpkspchangecondition';
import { SpipilpPage } from '../pages/spipilp/spipilp';
import { IlpapplicationPage } from '../pages/ilpapplication/ilpapplication';
import { IlprenewPage } from '../pages/ilprenew/ilprenew';
import { IlpbranchPage } from '../pages/ilpbranch/ilpbranch';
import { IlpchangestatusPage } from '../pages/ilpchangestatus/ilpchangestatus';
import { IlppermitPage } from '../pages/ilppermit/ilppermit';
import { IlppermitdetailPage } from '../pages/ilppermitdetail/ilppermitdetail';
import { QueryPage } from '../pages/query/query';
import { HotelPage } from '../pages/hotel/hotel';
import { Hotel2Page } from '../pages/hotel2/hotel2';
import { HotelapplicationPage } from '../pages/hotelapplication/hotelapplication';
import { HotelclassificationPage } from '../pages/hotelclassification/hotelclassification';
import { LocalNotifications } from '@ionic-native/local-notifications';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IndexPage,
    TestPage,
    TgdetailPage,
    TobtabPage,
    Tobtab2Page,
    BpkspPage,
    Bksp2Page,
    IlpPage,
    Ilp2Page,
    AduanPage,
    SpipPage,
    TgnewlicensePage,
    KuiriPage,
    TgrenewlicensePage,
    SpiptobtabPage,
    TobtabapplicationPage,
    TobtabchangestatusPage,
    TobtabrenewPage,
    TobtabaddfieldPage,
    TobtabaddbranchPage,
    TobtabkuiriPage,
    SpipbpkspPage,
    BpkspapplicationPage,
    BpksprenewPage,
    BpkspchangeconditionPage,
    SpipilpPage,
    IlpapplicationPage,
    IlprenewPage,
    IlpbranchPage,
    IlpchangestatusPage,
    IlppermitPage,
    IlppermitdetailPage,
    QueryPage,
    HotelPage,
    Hotel2Page,
    HotelclassificationPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IndexPage,
    TestPage,
    TgdetailPage,
    TobtabPage,
    Tobtab2Page,
    BpkspPage,
    Bksp2Page,
    IlpPage,
    Ilp2Page,
    AduanPage,
    SpipPage,
    TgnewlicensePage,
    KuiriPage,
    TgrenewlicensePage,
    SpiptobtabPage,
    TobtabapplicationPage,
    TobtabchangestatusPage,
    TobtabrenewPage,
    TobtabaddfieldPage,
    TobtabaddbranchPage,
    TobtabkuiriPage,
    SpipbpkspPage,
    BpkspapplicationPage,
    BpksprenewPage,
    BpkspchangeconditionPage,
    SpipilpPage,
    IlpapplicationPage,
    IlprenewPage,
    IlpbranchPage,
    IlpchangestatusPage,
    IlppermitPage,
    IlppermitdetailPage,
    QueryPage,
    HotelPage,
    Hotel2Page,
    HotelclassificationPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    BpkspProvider,
    IlpProvider,
    LocalNotifications
  ]
})
export class AppModule {}
