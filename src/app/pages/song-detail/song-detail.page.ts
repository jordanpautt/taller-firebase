import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';
import { ISong } from 'src/app/interface/index.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.page.html',
  styleUrls: ['./song-detail.page.scss'],
})
export class SongDetailPage implements OnInit {

  songData$: Observable<ISong>;
  idDoc: string;

  constructor(private firebaseService: FirebaseService, private alertCtrl: AlertController, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.idDoc = this.route.snapshot.paramMap.get('id');
    this.songData$ = this.firebaseService.getSongDetail(this.idDoc);
  }

  async deleteSong() {

    const alert = await this.alertCtrl.create({
      message: 'Are you sure want to delete the song?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.firebaseService.deleteSong(this.idDoc).then(() => {
              this.router.navigateByUrl('');
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
