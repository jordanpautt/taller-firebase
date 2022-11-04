import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ISong } from '../../interface/index.interface';

@Component({
  selector: 'app-form-song',
  templateUrl: './form-song.page.html',
  styleUrls: ['./form-song.page.scss'],
})
export class FormSongPage implements OnInit {


  constructor(
    private loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public async createSong(valueForm: ISong) {
    const loading = await this.loadingCtrl.create();
    this.firebaseService.addSong(valueForm).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('');
      });
    }).catch((err) => {
      console.log(err);
    });
    return await loading.present();
  }

}
