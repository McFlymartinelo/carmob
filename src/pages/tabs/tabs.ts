import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {TimelinePage} from "../timeline/timeline";
import {QrcodePage} from "../qrcode/qrcode";
import {SettingsPage} from "../settings/settings";
import {SigninPage} from "../signin/signin";
import {SocialPage} from "../social/social";
import {CarsPage} from "../cars/cars";
import {GalleryPage} from "../gallery/gallery";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  rassos: FirebaseListObservable<any[]>;

  constructor(private firebaseProvider: FirebaseProvider){
    this.rassos = this.firebaseProvider.getRasso();
  }


  timelinePage = TimelinePage;
  qrCodePage = QrcodePage;
  settingsPage = SettingsPage;
  signinPage = SigninPage;
  socialPage = SocialPage;
  carsPage = CarsPage;
  galleryPage = GalleryPage;

}
