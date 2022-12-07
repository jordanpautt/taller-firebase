import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IConcert } from '../../interface/index.interface';
import { ConcertsService } from '../../services/concerts.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.page.html',
  styleUrls: ['./concert.page.scss'],
})
export class ConcertPage implements OnInit {

  public concertData$: Observable<IConcert[]>;

  constructor(private router: Router, private alertCtrl: AlertController, private concertService: ConcertsService) { }

  ngOnInit() {
    this.concertData$ = this.concertService.getConcert();
  }


  async deleteConcert(idDoc: string) {

    const alert = await this.alertCtrl.create({
      message: 'Are you sure want to delete the concert?',
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
            this.concertService.deleteConcert(idDoc).then(() => {
              this.router.navigateByUrl('home/concert');
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
