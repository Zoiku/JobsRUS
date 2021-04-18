import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user:string = '';

  constructor(private auth: AngularFireAuth, private route:Router, private zone:NgZone) {}

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(!user) {
        this.zone.run(() => {
          this.route.navigate(['/welcome'])
        })
      }else {
        this.user = user.displayName;
      }
    })
  }
}
