import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera} from "@ionic-native/camera";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";
import {GalleryDetailsPage} from "../gallery-details/gallery-details";
import {storage} from "firebase";

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
  rasso; imgsource: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private firebaseProvider: FirebaseProvider, public zone: NgZone) {
    this.rassos = this.firebaseProvider.getRasso();
    this.rasso = Object.assign([], this.rassos);
    this.myPhotosRef = storage().ref('/');
    console.log('Passes params', navParams.data);
    this.date=navParams.get('date');
    //this.date = this.navParams.get('date');
    console.log('link', this.rassos);
    console.log('daterasso', this.date);
    this.display();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onLoadDetails(date: string, image : string){
    console.log('Gallery', date);
    this.navCtrl.push(GalleryDetailsPage, {date: date});
  }

  takePhoto(i: number) {
    console.log(i);
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(i);
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }


  private uploadPhoto(i: number): void {
    this.myPhotosRef.child('myPhoto.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }
  display() {
    console.log('image', storage().ref().child('/'));
    console.log('date', this.rasso.date);

    storage().ref().child('/' + this.date + '/' + this.date + '.jpg').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
      })
    })
  }
}
