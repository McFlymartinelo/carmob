import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})

export class TimelinePage {
  url: string;

  title: string = 'My first AGM project';
  lat: number = 48.802590;
  lng: number = 1.781838;

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

}
