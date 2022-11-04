import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ISong } from '../../interface/index.interface';

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.page.html',
  styleUrls: ['./update-song.page.scss'],
})
export class UpdateSongPage implements OnInit {

  songData$: Observable<ISong>;
  idDoc: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private firebaseService: FirebaseService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.idDoc = this.route.snapshot.paramMap.get('id');
    this.songData$ = this.firebaseService.getSongDetail(this.idDoc);
  }

  public async updateSong(valueForm: ISong) {
    const loading = await this.loadingCtrl.create();
    this.firebaseService.updateSong(valueForm, this.idDoc).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('');
      });
    }).catch((err) => {
      console.log(err);
    });
    return await loading.present();
  }
}
