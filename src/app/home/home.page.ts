import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { ISong } from '../interface/song.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public songData$: Observable<ISong[]>;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.songData$ = this.firebaseService.getSong();
  }

}
