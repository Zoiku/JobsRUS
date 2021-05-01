import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private alertController:AlertController, private sms:SMS,) { }

  async sendsms(telephonenumber:string) {
    const alert = await this.alertController.create({
      header: 'Send Message',
      inputs: [
        {
          name: 'Message',
          type: 'text',
          placeholder: 'Enter Message'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Send',
          handler: (Message:string) => {
            this.sms.send(`${telephonenumber}`, `${Message['Message']}`)
          }
        }
      ]
    });

    await alert.present();
  }

}
