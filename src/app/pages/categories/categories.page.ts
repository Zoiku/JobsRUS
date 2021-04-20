import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  async close() {
    await this.modalCtrl.dismiss()
  }

  ngOnInit() {}

}
