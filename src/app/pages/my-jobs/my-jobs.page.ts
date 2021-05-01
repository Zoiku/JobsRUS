import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from '../../services/listings.service';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../../pages/profile/profile.page';



@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.page.html',
  styleUrls: ['./my-jobs.page.scss'],
})
export class MyJobsPage implements OnInit {
  hide:boolean = false;

  constructor(private auth:AngularFireAuth, private modalController:ModalController, private listingService:ListingsService, private authService: AngularFireAuth) { }

  ngOnInit() {
    this.listingService.refreshNeeded$.subscribe(() => this.listingService.updateListings());

    this.auth.onAuthStateChanged(user => {
      if(user) {
        this.auth.currentUser.then(user => {
          if(user.providerData[0].providerId != 'password') {
            this.hide = true;
          }
        })
      }
    })
  }

  async close() {
    await this.modalController.dismiss();
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ProfilePage
    })

    await modal.present();
  }
}
