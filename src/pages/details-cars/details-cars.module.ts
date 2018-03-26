import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsCarsPage } from './details-cars';

@NgModule({
  declarations: [
    DetailsCarsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsCarsPage),
  ],
})
export class DetailsCarsPageModule {}
