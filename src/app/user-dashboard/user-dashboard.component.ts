import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
import {RequestMachanicService} from '../services/request-machanic.service'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
public profile :any[]= [];
public history = [];
public userMail = localStorage.getItem("email")
public username ;
  constructor(private Userprofile :ProfileService,private statushistory:RequestMachanicService) { }

  ngOnInit(): void {
    this.Userprofile.getUserProfile().subscribe((data:any[]) => {
      this.profile.push(data)
      console.log(this.profile)

    })
    
    this.statushistory.getUserRistory(this.userMail).subscribe((data:any []) => {
      this.history = data;
      console.log(this.history)
    })
  
  }

}
