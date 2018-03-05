var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { TgrenewlicensePage } from '../pages/tgrenewlicense/tgrenewlicense';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                MapPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                AuthServiceProvider,
                BpkspProvider,
                IlpProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map