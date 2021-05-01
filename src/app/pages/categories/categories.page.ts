import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { PostJobPage } from '../../pages/post-job/post-job.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  allow:boolean = true;

  constructor(private modalController:ModalController, private auth:AngularFireAuth, private alertController:AlertController) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(user) {
        this.auth.currentUser.then(user => {
          if(user.providerData[0].providerId != 'password') {
            this.allow = false;
          }else {
            this.allow = true;
          }
        })
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'You can only post a job listing after creating your JobsRUS account',
      buttons: ['OK']
    });
    await alert.present();
  }


  async showModal() {
    if(this.allow) {
      const modal = await this.modalController.create({
        component: PostJobPage
      })
      await modal.present();
    }
    else {
      this.presentAlert()
    }
  }

}
