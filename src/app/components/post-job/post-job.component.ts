import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Listing } from '../../interfaces/listing';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  listing:Listing;
  currentUser:User

  constructor(private modalController:ModalController, private userService:UsersService) { }

  async ngOnInit() {
    this.currentUser = await this.userService.getCurrentUser()
  }

  async close() {
    await this.modalController.dismiss();
  }
}
