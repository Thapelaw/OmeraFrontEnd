import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service'
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-mechanic',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  public updateAdmin: FormGroup;
  public id: string;
  constructor(private formBuilder: FormBuilder, private admiRequest: RegistrationService,private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admiRequest.getAdminById(this.id).subscribe(data => {
      console.log(data)
       this.updateAdmin.setValue(data)
    },err => {
      console.log(err);
    })
    this.updateMechanicform()
  }

  public updateMechanicform() {
    this.updateAdmin = this.formBuilder.group({
      _id:[''],
      __v:[''],
      username: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      password:[''],
      role:['']
    })
  }

  public onSubmit() {
     this.admiRequest.updateAdmin(this.id,this.updateAdmin.value).subscribe(data => {
       console.log(data)
       this.alertMessage()
       this.router.navigate(['/admin']);
     },(err) => {
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
