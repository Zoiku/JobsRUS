import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  user:User = {
    firstname: '',
    lastname: '',
    name: '',
    email: '',
    password: '',
    emailVerified: false,
    location: ''
  };

  constructor(private authService:AuthService, private auth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(user) {
        console.log(user)
      } else {
        console.log('Sign in to view user information')
      }
    })
  }
}
