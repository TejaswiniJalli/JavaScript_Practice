import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  getAllUsers: any = localStorage.getItem('users');
  users=JSON.parse(this.getAllUsers);
  signupForm ={
    firstName:this.users.fname,
    lastName:this.users.lname,
    dob:this.users.dob,
    email:this.users.email,
    phone:this.users.phno,
  
  }
}
