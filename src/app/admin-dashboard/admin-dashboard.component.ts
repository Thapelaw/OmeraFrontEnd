import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AdminModuleService} from '../services/admin-module.service'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public history = [];
  public updateUser: FormGroup;
  p: number = 1;
  constructor(private admiRequest: AdminModuleService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.admiRequest.getAllRequests().subscribe((data:any []) =>{
      this.history = data
      console.log(data)
    })
  }

 

}
