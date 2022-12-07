import { Component, OnInit } from '@angular/core';
import { RecordingService } from '../../services/recording.service';
import { IRecording } from '../../interface/index.interface';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recording',
  templateUrl: './recording.page.html',
  styleUrls: ['./recording.page.scss'],
})
export class RecordingPage implements OnInit {

  public recordingData$: Observable<IRecording[]>;

  constructor(private router: Router, private alertCtrl: AlertController, private recordingService: RecordingService) { }

  ngOnInit(): void {
    this.recordingData$ = this.recordingService.getRecording();
  }

  async deleteRecording(idDoc: string) {

    const alert = await this.alertCtrl.create({
      message: 'Are you sure want to delete the recording?',
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
            this.recordingService.deleteRecording(idDoc).then(() => {
              this.router.navigateByUrl('home/recording');
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
