import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user:string = '';

  constructor(private auth: AngularFireAuth, private listingService:ListingsService) {}

  async ngOnInit() {

    this.listingService.refreshNeeded$.subscribe(() => this.listingService.updateListings());

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
