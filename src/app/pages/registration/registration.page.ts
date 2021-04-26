import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  password:string = '';
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    telephone: ''
  }
  passwordRegex:RegExp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,20})/;
  emailRegex:RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Validations
  passwordVal:boolean = true;
  emailVal:boolean = true;
  telephoneVal:boolean = true;

  // successValidation
  success:boolean = true;

  constructor(private auth: AuthService, private userService:UsersService, private route:Router) { }

  ngOnInit() {}

  async submit() {
    try {
      if(this.password != '', this.user.email != '', this.user.firstname != '', this.user.lastname != '', this.user.telephone != '' ) {
        this.telephoneVal = true;

        if(this.passwordRegex.test(this.password)){
          this.passwordVal = true;
        }else {
          this.passwordVal = false;
        }

        if(this.emailRegex.test(this.user.email)){
          this.emailVal = true;
        }else {
          this.emailVal = false;
        }


        if(this.emailVal === true, this.passwordVal === true, this.emailVal === true) {
          this.success = true;
        } else {
          this.success = false;
        }

        if(this.success === true) {
          let fireAuth =  await this.auth.signUp(this.user.email, this.password);
          if(fireAuth) {
            this.userService.register(this.user);
            this.route.navigate['/welcome'];
          }
        }

      }else {
        this.success = false;
        this.passwordVal = false;
        this.emailVal = false;
        this.telephoneVal = false;
      }
    } catch (error) {
      alert(error);
    }
  }

}
