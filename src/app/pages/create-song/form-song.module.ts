import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FormSongPageRoutingModule } from './form-song-routing.module';

import { FormSongPage } from './form-song.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormSongPageRoutingModule,
    SharedModule
  ],
  declarations: [FormSongPage]
})
export class FormSongPageModule { }
