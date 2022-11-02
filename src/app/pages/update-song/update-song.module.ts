import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSongPageRoutingModule } from './update-song-routing.module';

import { UpdateSongPage } from './update-song.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSongPageRoutingModule,
    SharedModule
  ],
  declarations: [UpdateSongPage]
})
export class UpdateSongPageModule { }
