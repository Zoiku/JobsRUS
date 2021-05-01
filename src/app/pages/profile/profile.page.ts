import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  currentuser:User;

  constructor(private modalController:ModalController, private userService:UsersService) { }

  async ngOnInit() {
    this.currentuser = await this.userService.getCurrentUser();
  }

  async close() {
    await this.modalController.dismiss();
  }
}
