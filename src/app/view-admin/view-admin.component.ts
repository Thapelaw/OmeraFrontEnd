import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  public admin = [];
  p: number = 1;
  constructor(private register:RegistrationService) { }

  ngOnInit(): void {
    this.register.getAllAdmin().subscribe((data: any[]) => {
      this.admin = data
      console.log(data)
    })
  }

  public delete(_id) {
    this.register.deleteAdmin(_id).subscribe(data => {
      console.log(data)
      this.alertMessage()
      window.location.reload();
    }, err => {
      console.log(err)
    })
  }

  public alertMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Mechanic Deleted',
    })
  }

}
