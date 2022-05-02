import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  userPassword = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onLoginBtnPressed(): void {
    console.log(this.userName + this.userPassword);
    localStorage.setItem("auth", "logged");
    if (this.userName == 'admin')
      localStorage.setItem("userType", "admin");
    else
      localStorage.setItem("userType", "user");


    this.router.navigate(['home']);
  }

}
