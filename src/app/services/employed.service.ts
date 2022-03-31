import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { IEmployed } from '../interfaces/employed.interface';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployedService {

  constructor(
    private _firestore: AngularFirestore,
  ) {
    
   }

   addEmployed(employed: IEmployed): Promise<DocumentReference<IEmployed>>{
    return this._firestore.collection<IEmployed>('employeds').add(employed)
   }

   getEmployeds$(){
    return this._firestore.collection<IEmployed>('employeds').snapshotChanges()
    .pipe(
      map(data => data.map(doc => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as IEmployed
        }
      }))
    )
   }

}
