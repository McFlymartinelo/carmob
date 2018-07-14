import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {TimelinePage} from "../timeline/timeline";
import {QrcodePage} from "../qrcode/qrcode";
import {SettingsPage} from "../settings/settings";
import {SigninPage} from "../signin/signin";
import {SocialPage} from "../social/social";
import {CarsPage} from "../cars/cars";
import {GalleryPage} from "../gallery/gallery";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";
import {GalleryDetailsPage} from "../gallery-details/gallery-details";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  rassos: FirebaseListObservable<any[]>;
  date: string;

  constructor(private firebaseProvider: FirebaseProvider, private navCtrl: NavController){
    this.rassos = this.firebaseProvider.getRasso();
  }


  timelinePage = TimelinePage;
  qrCodePage = QrcodePage;
  settingsPage = SettingsPage;
  signinPage = SigninPage;
  socialPage = SocialPage;
  carsPage = CarsPage;
  //galleryPage = GalleryPage;

  onLoadDetails(date: string, image : string){
    this.date = date;
    console.log('Gallery', date);
    this.navCtrl.push(GalleryPage, {date: date});
  }

  RassoParams = {
    date1: '{{rasso.date}}',
    date2: '{{rasso.date}}'
  }

}
