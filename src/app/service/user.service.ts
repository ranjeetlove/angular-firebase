import { Injectable, inject } from '@angular/core';
import { User } from '../User';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]=[]
  firestore: Firestore = inject(Firestore);

  constructor(private db: AngularFireDatabase) { }

  createUser(resData:any){
    
    const usersRef = this.db.list('users');
    usersRef.push({
      name: resData.name,
      description: resData.description
    }).then(() => {
      console.log('Data inserted successfully!');
    }).catch(error => {
      console.error('Error inserting data:', error);
    });


    this.users.push(resData);
  }

  getUser(){
     const itemCollection = collection(this.firestore, 'users');
     let item = collectionData(itemCollection);
     console.log(item,'item');
    return this.users;
  }

}
