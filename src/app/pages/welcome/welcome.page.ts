import { Component, NgZone, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  password:string='';
  user:User = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: ''
  };
  err_msg = '';

  constructor(private authService:AuthService, private auth:AngularFireAuth, private router:Router, private zone:NgZone) {}

  async ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if(user) {
        this.zone.run(() => {
          this.router.navigate(['/home'])
        })
      }
    })
  }

  emailSignIn() {
    var error = document.getElementById('error');
    this.authService.emailSignIn(this.user.email, this.password)
      .then()
      .catch(err => {
        this.err_msg = err;
        error.style.display = 'block';
      })
  }
}
