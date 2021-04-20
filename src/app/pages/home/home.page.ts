import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from 'src/app/services/listings.service';
import { WatchlistService } from '../../services/watchlist.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user:string = '';

  constructor(private auth: AngularFireAuth, private watchService:WatchlistService, private listingService: ListingsService) {}

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
