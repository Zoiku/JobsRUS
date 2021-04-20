import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user:string = '';
  watchlist:Array<Object> = [];
  listings:Array<Object> = [];

  constructor(private auth: AngularFireAuth, private http:HttpClient) {}

  async ngOnInit() {
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

    Object.assign(this.listings, await this.http.get('http://localhost:3000/api/listings').toPromise())
    Object.assign(this.watchlist, await this.http.get('http://localhost:3000/api/watch').toPromise())
  }
}
