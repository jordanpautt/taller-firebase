import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSongPageRoutingModule } from './form-song-routing.module';

import { FormSongPage } from './form-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSongPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormSongPage]
})
export class FormSongPageModule { }
