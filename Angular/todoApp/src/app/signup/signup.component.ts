import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Profile {
  fname:string,
  lname:string,
  dob:string,
  email:string,
  phno:string,
  psw:string
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  profile:Profile ={
    fname: '',
    lname: '',
    dob:'',
    phno:'',
    email: '',
    psw:''
    
  };

  constructor(private router: Router) { }

  redirectToLogin() {
    console.log(this.profile);
    localStorage.setItem("users",JSON.stringify(this.profile));
    this.router.navigate(['/login']);
  }

}
