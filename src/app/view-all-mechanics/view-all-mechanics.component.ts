import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminModuleService } from '../services/admin-module.service';

@Component({
  selector: 'app-view-all-mechanics',
  templateUrl: './view-all-mechanics.component.html',
  styleUrls: ['./view-all-mechanics.component.css']
})
export class ViewAllMechanicsComponent implements OnInit {
  public history = [];
  p: number = 1;
  constructor(private admiRequest: AdminModuleService,) { }

  ngOnInit(): void {
    this.admiRequest.getAllMechanic().subscribe((data: any[]) => {
      this.history = data
      console.log(data)
    })
  }

  public delete(_id) {
    this.admiRequest.deleteMechanic(_id).subscribe(data => {
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
