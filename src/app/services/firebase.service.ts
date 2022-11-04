import { Injectable } from '@angular/core';
import { ISong } from '../interface/index.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  songRef: AngularFirestoreCollection<ISong>;
  private dbPath = '/songList';

  constructor(private firestore: AngularFirestore) {
    this.songRef = firestore.collection(this.dbPath);
  }

  getSong(): Observable<ISong[]> {
    return this.songRef.valueChanges();
  }

  getSongDetail(idDoc: string): Observable<ISong> {
    return this.songRef.doc(idDoc).valueChanges();
  }

  addSong(
    songCreate: ISong
  ): Promise<void> {
    const idDoc = this.firestore.createId();
    return this.songRef.doc(idDoc).set({ ...songCreate, id: idDoc });
  }

  updateSong(songData: ISong, idDoc: string): Promise<void> {
    return this.songRef.doc(idDoc).update(songData);
  }

  deleteSong(idDoc: string): Promise<void> {
    return this.songRef.doc(idDoc).delete();
  }
}
