import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISong } from 'src/app/interface/index.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  public songData$: Observable<ISong[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.songData$ = this.firebaseService.getSong();
  }
}
