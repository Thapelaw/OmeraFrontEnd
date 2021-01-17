import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  public updateUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private Userprofile: ProfileService,private router: Router) { }

  ngOnInit(): void {
    this.Userprofile.getUserProfile().subscribe(data => {
      this.updateUser.setValue(data)
    }, err => {
      console.log(err);
    })
    this.updateUserform();
  }

  public updateUserform() {
    this.updateUser = this.formBuilder.group({
      id: [''],
      username: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
    })
  }

  public onSubmit() {
    let userid = this.updateUser.controls.id.value ;
    this.Userprofile.updateUser(userid,this.updateUser.value).subscribe(data => {
      console.log("successfully updated")
      window.location.reload();
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
