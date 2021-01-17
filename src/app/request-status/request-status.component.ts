import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModuleService } from '../services/admin-module.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  public updateUser: FormGroup;
  public  id: string;
  public mechanic = [];
  constructor(private admiRequest: AdminModuleService,private formBuilder: FormBuilder,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admiRequest.getById(this.id).subscribe(data =>{
      console.log(data)
      this.updateUser.setValue(data)
    })
    this.updateUserform();
    this.getAllMechanics();
  }

  public updateUserform() {
    this.updateUser = this.formBuilder.group({
      _id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      location:[''],
      assignedMechanic:[''],
      status:[''],
      
    })
  }

  public getAllMechanics(){
    this.admiRequest.getAllMechanic().subscribe((data:any []) =>{
      this.mechanic = data
      console.log(data)
    })
  }

  public onSubmit() {
    this.admiRequest.updated(this.id,this.updateUser.value).subscribe(data =>{
        console.log(data +"success")
        this.alertMessage()
        this.router.navigate(['/admin']);
    }, err => {
      console.log(err)
    })
  }
  public alertMessage(){
    Swal.fire({
      icon: 'success',
      title: 'Request updated',
    })
  }
}
