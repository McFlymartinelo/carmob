import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from "@ionic-native/camera";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";
import {GalleryDetailsPage} from "../gallery-details/gallery-details";

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  rassos: FirebaseListObservable<any[]>;
  date; image: string;
  rasso: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private firebaseProvider: FirebaseProvider) {
    this.rassos = this.firebaseProvider.getRasso();
    this.rasso = Object.assign([], this.rassos);
    console.log('link', this.rassos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onLoadDetails(date: string, image : string){
    console.log('Gallery', date);
    this.navCtrl.push(GalleryDetailsPage, {date: date});
  }
}
