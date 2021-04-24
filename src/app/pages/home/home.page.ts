import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user:string = '';

  constructor(private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.onAuthStateChanged( user => {
      if(user) {
        if(!user.displayName) {
          this.user = user.email;
        } else {
          this.user = user.displayName;
        }
      } else {
        location.href = '/welcome';
      }
    })
  }
}
