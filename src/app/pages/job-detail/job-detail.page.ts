import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../../interfaces/listing';
import { AngularFireAuth } from '@angular/fire/auth';
import { ListingsService } from '../../services/listings.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SmsService } from '../../services/sms.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  id:number = 0;
  myJobs:Listing;
  job:Listing = {
    id: 0,
    category: '',
    title: '',
    salary: '',
    description: '',
    email: '',
    location: '',
    telephone: ''
  };
  delete:boolean = false;

  constructor(private smsService:SmsService, private route:Router, private alertController:AlertController, private activatedRoute:ActivatedRoute, private auth: AngularFireAuth, private listingService:ListingsService) { }

  async ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.myJobs = await this.listingService.getMyJob(this.id);
    this.job = this.myJobs[0];

    if((await this.auth.currentUser).email === this.job.email) {
        this.delete = true;
    }
  }

  async del() {
    let alert = await this.alertController.create({
      header: 'Confirm Delete?',
      message: 'Do you agree to delete this job offer?',
      buttons: [
        {
          text: 'Yes',
          role: 'yes',
          handler: () => {
            this.listingService.deleteListing(this.id).subscribe(() => {
              location.href = '/my-jobs';
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        },
      ]
    });
    await alert.present();
  }

  sms() {
    this.smsService.sendsms(this.job.telephone);
  }
}
