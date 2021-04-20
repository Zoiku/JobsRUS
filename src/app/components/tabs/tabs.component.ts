import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { CategoriesPage } from '../../pages/categories/categories.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private authService: AuthService, private modalCtrl:ModalController) { }

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: CategoriesPage
    })

    await modal.present();
  }

}
