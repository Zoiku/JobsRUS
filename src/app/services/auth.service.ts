import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: AngularFireAuth) {}

  async getcurrentEmail():Promise<firebase.User> {
    return this.auth.currentUser
  }

  signUp(email:string, password:string):Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  emailSignIn(email:string, password:string):Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async googleSignIn() {
   await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
  }

  async facebookSignIn() {
    await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider);
  }

  resetPassword(email:string):Promise<void> {
    return this.auth.sendPasswordResetEmail(email)
  }

  signOut() {
    this.auth.signOut()
      .catch(err => err)
  }
}
