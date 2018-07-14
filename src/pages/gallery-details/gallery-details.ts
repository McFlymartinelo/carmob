import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {Camera} from "@ionic-native/camera";
import { storage } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-gallery-details',
  templateUrl: 'gallery-details.html',
})
export class GalleryDetailsPage {
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  date; uuid; link: string;
  i: number;
  imgsource: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private firebaseProvider: FirebaseProvider, public zone: NgZone) {
    this.date = this.navParams.get('date');
    this.myPhotosRef = storage().ref('/' + this.date + '/');
    this.i = 1;
    this.getRassoImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryDetailsPage');
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
      this.i = this.i +1;
      this.uploadPhoto(i);
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  selectPhoto(i: number): void {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(i);
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  private uploadPhoto(i: number): void {
    this.uuid = this.generateUUID();
    this.myPhotosRef.child(''+ this.uuid + i +'.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.myPhotoURL = savedPicture.downloadURL;
      });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  public getRassoImage(){
    /*let imgUrl: string;
    this.link = "https://firebasestorage.googleapis.com/v0/b/carmob-7e6e4.appspot.com/o/Rasso%20Septembre%202018%2F59885949-f8af-4f27-a5762.png?alt=media&token=49977934-9a16-4e15-bf87-5b2a927239c5";
    console.log("link", this.link);
    try{
      storage().ref().child("/Rasso%20Septembre%202018%2F59885949-f8af-4f27-a5762.png?alt=media&token=49977934-9a16-4e15-bf87-5b2a927239c5").getDownloadURL().then(function(url){
        console.log("log1: " + url);
        return url;
      });
    }
    catch(e){

      console.log(e);
    }*/
    console.log('getRassoImage',);
    // Create a reference to the file we want to download
    var starsRef = storage().ref().child('/' + this.date + '/');
    console.log('starsRef',starsRef);
// Get the download URL
    starsRef.getDownloadURL().then(function(url) {
      // Insert url into an <img> tag to "download"
    }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.message) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
  }

  display() {
    console.log('image', storage().ref().child('/'));
    console.log('daterasso', storage().ref().child('/'+ this.date));
    storage().ref().child('/Rasso Mai 2018.jpg').getDownloadURL().then((url) => {
      this.zone.run(() => {
        this.imgsource = url;
      })
    })
  }
}
