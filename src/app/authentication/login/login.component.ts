import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password
  userName
  mouseOverLogin: boolean
  loginInvalid = false;

  constructor(private authService: AuthenticationService ,private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(resp => {
        const token = <any>(resp).token;
        if (!resp) {
          this.loginInvalid = true;//Use this to show a message to the user, if their login failed.
        }
        else {
          this.router.navigate(['events']);
        }
      });
  }

  // login(formValues) {
  //   this.authService.loginUser(formValues.userName, formValues.password)
  //     .subscribe(resp => {
  //       if (!resp) {
  //         this.loginInvalid = true;//Use this to show a message to the user, if their login failed.
  //       }
  //       else {
  //         this.router.navigate(['events']);
  //       }
  //     });
  // }

  cancel() {
    this.router.navigate(['events']);
  }

}
