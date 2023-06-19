import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string="";
  psw:string="";

  constructor(private router: Router) { }

  redirectToProfile() {
   const userDetails:any= localStorage.getItem("users");
   if (
    this.email == JSON.parse(userDetails).email &&
    this.psw == JSON.parse(userDetails).psw
  ) {
    this.router.navigate(['/profile']);
  } 
  }

}
