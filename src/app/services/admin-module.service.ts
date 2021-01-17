import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {UpdateMode} from '../model/updateMode';
import {Invoices} from '../model/invoice';
import {MechanicModel} from '../model/mechanic'
@Injectable({
  providedIn: 'root'
})
export class AdminModuleService {

  constructor(private httpClient: HttpClient) { }

  public getAllRequests(){
    return this.httpClient.get(environment.url+"request/getAllRequest");
  }

  public getById(id:string){
    return this.httpClient.get(environment.url+"request/getRequestById/"+id);
  }
  public updated(id:string,updateMode:UpdateMode){
    return this.httpClient.put(environment.url+"request/update/"+id,updateMode); 
  }

  public getUserProfile(){
    return this.httpClient.get(environment.url+"users/profile",)
  }

  public sendInvoice(invoices:Invoices){
    return this.httpClient.post(environment.url+"invoice/sendinvoice",invoices)
  }

  public getAllMechanic(){
    return this.httpClient.get(environment.url+"mechanic/getAllMechanic");
  }

  public addNewMechanic(addMech:MechanicModel){
    return this.httpClient.post(environment.url+"mechanic/addNewMechanic",addMech)
  }

  public deleteMechanic(id:string){
    return this.httpClient.delete(environment.url+"mechanic/removeMechanic/"+id);
  }

  public getMechenicById(id:string){
    return this.httpClient.get(environment.url+"mechanic/getMechanicById/"+id);
  }

  public updateMechanic(updateMech:MechanicModel){
    return this.httpClient.put(environment.url+"mechanic/updateMechanic",updateMech)
  }
}
