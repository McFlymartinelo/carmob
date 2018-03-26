import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {TimelinePage} from "../timeline/timeline";
import {QrcodePage} from "../qrcode/qrcode";
import {SettingsPage} from "../settings/settings";
import {SigninPage} from "../signin/signin";
import {SocialPage} from "../social/social";
import {CarsPage} from "../cars/cars";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  timelinePage = TimelinePage;
  qrCodePage = QrcodePage;
  settingsPage = SettingsPage;
  signinPage = SigninPage;
  socialPage = SocialPage;
  carsPage = CarsPage;

}
