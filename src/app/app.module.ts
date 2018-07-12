import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {TimelinePage} from "../pages/timeline/timeline";
import {QrcodePage} from "../pages/qrcode/qrcode";
import {SettingsPage} from "../pages/settings/settings";
import {SigninPage} from "../pages/signin/signin";
import {SocialPage} from "../pages/social/social";
import {TabsPage} from "../pages/tabs/tabs";
import {HttpModule} from "@angular/http";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FirebaseProvider} from "../provider/firebase/firebase";
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {CarsPage} from "../pages/cars/cars";
import {DetailsCarsPage} from "../pages/details-cars/details-cars";
import {AgmCoreModule} from "@agm/core";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {GalleryPage} from "../pages/gallery/gallery";
import {LaunchNavigator} from "@ionic-native/launch-navigator";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import { Camera} from "@ionic-native/camera";
import { IonicImageViewerModule } from 'ionic-img-viewer';
import {GalleryDetailsPage} from "../pages/gallery-details/gallery-details";


@NgModule({
  declarations: [
    MyApp,
    TimelinePage,
    QrcodePage,
    SettingsPage,
    SigninPage,
    SocialPage,
    TabsPage,
    CarsPage,
    DetailsCarsPage,
    GalleryPage,
    GalleryDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyClKXhd04PrcQuIHE3BH9kgSZnmamMSoZY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimelinePage,
    QrcodePage,
    SettingsPage,
    SigninPage,
    SocialPage,
    TabsPage,
    CarsPage,
    DetailsCarsPage,
    GalleryPage,
    GalleryDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    LaunchNavigator,
    NativeGeocoder,
    Camera
  ]
})
export class AppModule {}
