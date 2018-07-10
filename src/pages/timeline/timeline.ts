import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";
import { LaunchNavigator } from '@ionic-native/launch-navigator';


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
  meetings: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser, private firebaseProvider: FirebaseProvider, private launchNavigator: LaunchNavigator, ) {
    this.meetings = this.firebaseProvider.getMeeting();
    console.log('meetings', this.meetings);
  }

  openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    const browser = this.inAppBrowser.create(url, '_self', options);
  }

  navme(adress){
    this.launchNavigator.navigate(adress);
  }

}
