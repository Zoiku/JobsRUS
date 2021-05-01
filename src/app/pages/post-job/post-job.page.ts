import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Listing } from '../../interfaces/listing';
import { ListingsService } from '../../services/listings.service';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.page.html',
  styleUrls: ['./post-job.page.scss'],
})
export class PostJobPage implements OnInit {
  listing:Listing = {
    id: null,
    title: '',
    category: '',
    description: '',
    salary: '',
    location: '',
    email: '',
    telephone: '',
  };

  currentUser:User = {
    email: '',
    telephone: '',
    firstname: '',
    lastname: ''
  };

  constructor(private auth:AngularFireAuth, private route:Router, private modalController:ModalController, private userService:UsersService, private listingService:ListingsService) {}

  async ngOnInit() {
    this.currentUser = await this.userService.getCurrentUser();
  }

  async close() {
    await this.modalController.dismiss();
  }

  addJob() {
    this.listing.email = this.currentUser.email;
    this.listing.telephone = this.currentUser.telephone;

    this.listingService.addListing(this.listing).subscribe(() => {
      location.href = '/my-jobs';
    })
  }
}



