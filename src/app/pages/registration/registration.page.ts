import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  user: User = {
    firstname: '',
    lastname: '',
    name: '',
    email: '',
    password: '',
    emailVerified: false,
    telephone: ''
  }
  password_confirmation:string = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {}

}
