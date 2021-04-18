import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signUp(email:string, password:string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.auth.currentUser
        .then(user => user.sendEmailVerification())
        .catch(err => err)
    })
    .catch(err => err)
  }

  emailSignIn(email:string, password:string):Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async googleSignIn():Promise<firebase.auth.UserCredential> {
   await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  async twitterSignIn():Promise<firebase.auth.UserCredential> {
    await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return await this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider);
  }

  async facebookSignIn():Promise<firebase.auth.UserCredential> {
    await this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return await this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  resetPassword(email:string):Promise<void> {
    return this.auth.sendPasswordResetEmail(email)
  }

  signOut() {
    this.auth.signOut()
      .catch(err => err)
  }
}
