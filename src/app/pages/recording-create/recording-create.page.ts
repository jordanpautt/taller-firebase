import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RecordingService } from '../../services/recording.service';
import { IRecording } from '../../interface/index.interface';

@Component({
  selector: 'app-recording-create',
  templateUrl: './recording-create.page.html',
  styleUrls: ['./recording-create.page.scss'],
})
export class RecordingCreatePage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private recordingServices: RecordingService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public async createRecording(valueForm: IRecording) {
    const loading = await this.loadingCtrl.create();
    this.recordingServices.addRecording(valueForm).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('home/recording');
      });
    }).catch((err) => {
      console.log(err);
    });
    return await loading.present();
  }

}
