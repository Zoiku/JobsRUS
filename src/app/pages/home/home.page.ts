import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user:string = '';

  constructor(private auth: AngularFireAuth, private http:HttpClient) {}

  ngOnInit() {
    let currentuser = this.auth.onAuthStateChanged;
    currentuser(user => {
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

    async function foo() {
      let data:Array<Object> = await this.http.get('http://localhost:3000/api/users');
      console.log(data);
    }

    foo();
  }
}
