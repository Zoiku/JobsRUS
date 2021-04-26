import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostJobComponent } from '../../components/post-job/post-job.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalController.create({
      component: PostJobComponent
    })

    await modal.present();
  }

}
