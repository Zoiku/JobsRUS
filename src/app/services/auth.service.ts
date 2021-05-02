import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: AngularFireAuth) {}

  // Methods to use the firebase api
  async getcurrentEmail():Promise<firebase.User> {
    return this.auth.currentUser
  }

  signUp(email:string, password:string):Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  emailSignIn(email:string, password:string):Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async googleSignIn():Promise<firebase.auth.UserCredential> {
   await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  async facebookSignIn():Promise<firebase.auth.UserCredential> {
    await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  resetPassword(email:string):Promise<void> {
    return this.auth.sendPasswordResetEmail(email)
  }

  // Sign Out method
  signOut() {
    this.auth.signOut()
      .catch(err => err)
  }
}
