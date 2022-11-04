import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IRecording } from '../../interface/index.interface';
import { RecordingService } from '../../services/recording.service';

@Component({
  selector: 'app-recording-update',
  templateUrl: './recording-update.page.html',
  styleUrls: ['./recording-update.page.scss'],
})
export class RecordingUpdatePage implements OnInit {

  recordingData$: Observable<IRecording>;
  idDoc: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, private recordingService: RecordingService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.idDoc = this.route.snapshot.paramMap.get('id');
    this.recordingData$ = this.recordingService.getRecordingDetail(this.idDoc);
  }

  public async updateRecording(valueForm: IRecording) {
    const loading = await this.loadingCtrl.create();
    this.recordingService.updateRecording(valueForm, this.idDoc).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('home/recording');
      });
    }).catch((err) => {
      console.log(err);
    });
    return await loading.present();
  }

}
