import { Component, OnInit } from '@angular/core';
import { SingersService } from '../../services/singers.service';
import { Observable } from 'rxjs';
import { ISingers } from 'src/app/interface/index.interface';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.page.html',
  styleUrls: ['./singers.page.scss'],
})
export class SingersPage implements OnInit {
  public singersData$: Observable<ISingers[]>;
  constructor(private singersService: SingersService) { }

  ngOnInit() {

    this.singersData$ = this.singersService.readSingers();
  }

}
