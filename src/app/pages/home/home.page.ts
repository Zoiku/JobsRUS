import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AngularFireAuth, private authService: AuthService, private route:Router, private zone:NgZone) {}

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(!user) {
        this.zone.run(() => {
          this.route.navigate(['/welcome'])
        })
      }
    })
  }

}
