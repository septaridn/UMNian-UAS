import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
 
@Injectable()
export class AuthenticateService {
 
  constructor(private navCtrl: NavController){}
 
  registerUser(data){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
       firebase
         .firestore()
         .doc(`/users/${newUserCredential.user.uid}`)
         .set({ Name: data.name, Email: data.email, PhoneNumber: data.phone, Location: data.locate });
      })
    })
  }
 
  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }
 
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("Log Out");
          this.navCtrl.navigateForward('/login');
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }
 
  userDetails(){
    return firebase.auth().currentUser;
  }
}