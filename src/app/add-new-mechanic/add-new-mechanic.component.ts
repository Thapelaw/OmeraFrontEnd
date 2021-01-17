import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminModuleService } from '../services/admin-module.service';

@Component({
  selector: 'app-add-new-mechanic',
  templateUrl: './add-new-mechanic.component.html',
  styleUrls: ['./add-new-mechanic.component.css']
})
export class AddNewMechanicComponent implements OnInit {
  public updateUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private admiRequest: AdminModuleService) { }

  ngOnInit(): void {
    this.updateUserform()
  }

  public updateUserform() {
    this.updateUser = this.formBuilder.group({
      companyName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      // serviceType: ['', Validators.required],
    })
  }

  public onSubmit() {
    // stop here if form is invalid
    if (this.updateUser.invalid) {
      this.ErrotMessage()
      return;
    }
    this.admiRequest.addNewMechanic(this.updateUser.value).subscribe(data => {
      console.log("successfully Added")
      window.location.reload();
      this.alertMessage()
    }, err => {
      console.log(err)
    })

  }
  public alertMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Profile updated',
    })
  }
  public ErrotMessage() {
    Swal.fire({
      icon: 'error',
      title: 'Please complete all the fields !',
    })
  }

}
