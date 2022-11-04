import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISingers } from '../interface/index.interface';

@Injectable({
  providedIn: 'root'
})
export class SingersService {

  constructor(private http: HttpClient) { }

  readSingers(): Observable<ISingers[]> {
    return this.http.get<ISingers[]>(`${environment.hostApi}/users`);
  }
}
