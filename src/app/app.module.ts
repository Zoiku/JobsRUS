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
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';

// Modal Component
import { PostJobModule } from './components/post-job/post-job.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireAuthModule,
    HttpClientModule,
    PostJobModule,
    AngularFireModule.initializeApp(environment.firebase)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
