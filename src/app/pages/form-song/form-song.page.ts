import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ISong } from '../../interface/song.interface';

@Component({
  selector: 'app-form-song',
  templateUrl: './form-song.page.html',
  styleUrls: ['./form-song.page.scss'],
})
export class FormSongPage implements OnInit {

  formSong: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public async onSubmit() {
    const songFormValue = this.formSong.value as ISong;

    const loading = await this.loadingCtrl.create();
    this.firebaseService.addSong(songFormValue).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('');
        this.formSong.reset();
      });
    }).catch((err) => {
      console.log(err);

    });
    return await loading.present();

  }

  private buildForm(): void {
    this.formSong = this.formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });
  }
}
