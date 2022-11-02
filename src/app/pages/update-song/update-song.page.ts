import { Component, OnInit } from '@angular/core';
import { ISong } from '../../interface/song.interface';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.page.html',
  styleUrls: ['./update-song.page.scss'],
})
export class UpdateSongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public updateSong(valueForm: ISong): void {

  }
}
