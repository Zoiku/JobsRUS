import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { DashCardsComponent } from '../../components/dash-cards/dash-cards.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, DashboardComponent, TabsComponent, DashCardsComponent]
})
export class HomePageModule {}
