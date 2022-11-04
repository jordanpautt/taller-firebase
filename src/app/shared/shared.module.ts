import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongFormComponent } from '../components/song-form/song-form.component';
import { IonicModule } from '@ionic/angular';
import { RecordingFormComponent } from '../components/recording-form/recording-form.component';



@NgModule({
  declarations: [SongFormComponent, RecordingFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SongFormComponent, RecordingFormComponent]
})
export class SharedModule { }
