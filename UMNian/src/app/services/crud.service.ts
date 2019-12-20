import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_NewPost(record) {
    return this.firestore.collection('artikel').add(record);
  }
 
  read_Posts() {
    return this.firestore.collection('artikel').snapshotChanges();
  }
 
  update_Post(recordID,record){
    this.firestore.doc('artikel/' + recordID).update(record);
  }
 
  delete_Post(record_id) {
    this.firestore.doc('artikel/' + record_id).delete();
  }
}
