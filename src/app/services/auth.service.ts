import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser:firebase.User;

  constructor(private auth: AngularFireAuth) {
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
    })
  }

  signUp(email:string, password:string) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // this.auth.
      })
      .catch(err => err)
  }

  signIn(provider:string, email:string, password:string) {
    if(!provider) {
      this.auth.signInWithEmailAndPassword(email, password)
        .catch(err => err)
    } else if(provider) {
        this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            if(provider === 'google') {
              this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
                .catch(err => err)
            }
            if(provider === 'twitter') {
              this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider)
                .catch(err => err)
            }
            if(provider === 'facebook') {
              this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
                .catch(err => err)
            }
          })
          .catch(err => err)
      }
  }

  signOut() {
    this.auth.signOut()
      .catch(err => err)
  }

  resetPassword(email:string) {
    this.auth.sendPasswordResetEmail(email)
    .then(()=> {
      alert('Password reset link has been sent to your email');
    })
      .catch(err => console.error(err))
  }
}
