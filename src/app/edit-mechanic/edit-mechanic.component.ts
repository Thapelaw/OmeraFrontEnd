import { Component, OnInit } from '@angular/core';
import {AdminModuleService} from '../services/admin-module.service'
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-mechanic',
  templateUrl: './edit-mechanic.component.html',
  styleUrls: ['./edit-mechanic.component.css']
})
export class EditMechanicComponent implements OnInit {
  public updateUser: FormGroup;
  public id: string;
  constructor(private formBuilder: FormBuilder, private admiRequest: AdminModuleService,private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admiRequest.getMechenicById(this.id).subscribe(data => {
       this.updateUser.setValue(data)
    },err => {
      console.log(err);
    })
    this.updateMechanicform()
  }

  public updateMechanicform() {
    this.updateUser = this.formBuilder.group({
      _id:[''],
      companyName: [''],
      email: ['',],
      phoneNumber: ['',],
      address: ['',],
      serviceType: ['',],
    })
  }

  public onSubmit() {
    this.admiRequest.updateMechanic(this.updateUser.value).subscribe(data => {
      console.log("successfully updated")
      this.router.navigate(['/admin']);
      this.alertMessage()
    }, err => {
      console.log(err)
    })

  }
  public alertMessage(){
    Swal.fire({
      icon: 'success',
      title: 'Profile updated',
    })
  }

}
