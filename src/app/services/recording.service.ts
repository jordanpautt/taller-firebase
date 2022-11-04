import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IRecording } from '../interface/index.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  recordingRef: AngularFirestoreCollection<IRecording>;
  private dbPath = '/recording';

  constructor(private firestore: AngularFirestore) {
    this.recordingRef = firestore.collection(this.dbPath);
  }

  getRecording(): Observable<IRecording[]> {
    return this.recordingRef.valueChanges();
  }

  getRecordingDetail(idDoc: string): Observable<IRecording> {
    return this.recordingRef.doc(idDoc).valueChanges();
  }

  addRecording(
    recordingData: IRecording
  ): Promise<void> {
    const idDoc = this.firestore.createId();
    return this.recordingRef.doc(idDoc).set({ ...recordingData, id: idDoc });
  }

  updateRecording(recordingData: IRecording, idDoc: string): Promise<void> {
    return this.recordingRef.doc(idDoc).update(recordingData);
  }

  deleteRecording(idDoc: string): Promise<void> {
    return this.recordingRef.doc(idDoc).delete();
  }
}
