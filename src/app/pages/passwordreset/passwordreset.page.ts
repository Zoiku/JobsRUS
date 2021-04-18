import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class PasswordresetPage implements OnInit {
  email:string = '';
  error_msg: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  reset(email:string) {
    var success:HTMLElement = document.querySelector('#success-msg');
    var error:HTMLElement = document.querySelector('#error-msg');

    this.authService.resetPassword(email)
      .then(() => {
        error.style.display = 'none';
        this.email = '';
        success.style.display = 'block';
        setTimeout(() => {
          success.style.display = 'none';
        }, 3000);
      })
      .catch(err => {
        this.error_msg = err;
        error.style.display = 'block';
      })
  }
}
