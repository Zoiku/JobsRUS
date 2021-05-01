import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase set up
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from '@angular/fire/auth';

// HTTP
import { HttpClientModule } from '@angular/common/http'

// Modal Components
import { PostJobPageModule } from './pages/post-job/post-job.module';
import { ProfilePageModule } from './pages/profile/profile.module';

// SMS Provider
import { SMS } from '@ionic-native/sms/ngx';


// Services
import { AuthService } from './services/auth.service';
import { ListingsService } from './services/listings.service';
import { UsersService } from './services/users.service';
import { SmsService } from './services/sms.service'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    HttpClientModule,
    ProfilePageModule,
    PostJobPageModule,
    AngularFireModule.initializeApp(environment.firebase)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, SMS, AuthService, ListingsService, UsersService, SmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
