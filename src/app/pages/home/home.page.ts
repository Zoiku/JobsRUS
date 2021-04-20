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
  watchlist:Array<Object> = [];
  listings:Array<Object> = [];

  constructor(private auth: AngularFireAuth, private watchService:WatchlistService, private listingService: ListingsService) {}

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

    // Retrieving all listings and assigning it to listings object
    Object.assign(this.listings, await this.listingService.getAllListings())

    // Retrieving all watchList and assigning it to watchList object
    Object.assign(this.watchlist, await this.watchService.getMyWatchList())
  }
}
