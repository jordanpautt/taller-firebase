import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IConcert } from '../interface/index.interface';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {

  concertRef: AngularFirestoreCollection<IConcert>;
  private dbPath = '/concerts';

  constructor(private firestore: AngularFirestore) {
    this.concertRef = firestore.collection(this.dbPath);
  }

  getConcert(): Observable<IConcert[]> {
    return this.concertRef.valueChanges();
  }

  addConcert(
    concertCreate: IConcert
  ): Promise<void> {
    const idDoc = this.firestore.createId();
    return this.concertRef.doc(idDoc).set({ ...concertCreate, id: idDoc });
  }

  updateConcert(concertData: IConcert, idDoc: string): Promise<void> {
    return this.concertRef.doc(idDoc).update(concertData);
  }

  deleteConcert(idDoc: string): Promise<void> {
    return this.concertRef.doc(idDoc).delete();
  }
}
