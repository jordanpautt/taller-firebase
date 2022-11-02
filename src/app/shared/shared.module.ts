import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongFormComponent } from '../components/song-form/song-form.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SongFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SongFormComponent]
})
export class SharedModule { }
