import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingCreatePageRoutingModule } from './recording-create-routing.module';

import { RecordingCreatePage } from './recording-create.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingCreatePageRoutingModule,
    SharedModule
  ],
  declarations: [RecordingCreatePage]
})
export class RecordingCreatePageModule { }
