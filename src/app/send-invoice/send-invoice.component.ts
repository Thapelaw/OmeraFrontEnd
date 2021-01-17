import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModuleService } from '../services/admin-module.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-send-invoice',
  templateUrl: './send-invoice.component.html',
  styleUrls: ['./send-invoice.component.css']
})
export class SendInvoiceComponent implements OnInit {
  public updateUser: FormGroup;
  public id: string;
  public invoice: any[] = [];
  constructor(private admiRequest: AdminModuleService, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admiRequest.getById(this.id).subscribe((data: any) => {
      this.invoice.push(data);
      console.log(this.invoice[0]._id)
    })

    this.updateUserform()
  }

  public updateUserform() {
    this.updateUser = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      serviceOne: [''],
      serviceTwo: [''],
      serviceThree: [''],
      priceOne: [null, ''],
      priceTwo: [null, ''],
      priceThree: [null, ''],
      totalCost: [null, ''],
    })
  }

  public onSubmit() {
    let ctc = this.updateUser.get('priceOne').value + this.updateUser.get('priceTwo').value + this.updateUser.get('priceThree').value
    this.updateUser.patchValue({
      firstName: this.invoice[0].firstName, lastName: this.invoice[0].lastName,
      email: this.invoice[0].email, phoneNumber: this.invoice[0].phoneNumber, totalCost: ctc
    })
    this.admiRequest.sendInvoice(this.updateUser.value).subscribe(data => {
      this.alertMessage()
      console.log(data)
      this.router.navigate(['/admin'])
    }, err => {
      console.log(err)
    })
    console.log(this.updateUser.value)
  }
  public alertMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Invoice sent',
    })
  }
}
