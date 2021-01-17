import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {UserModel} from '../model/userModel'
import {updateAdmin} from '../model/updateAdmin'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(userModel:UserModel) {
     return this.httpClient.post(environment.url+"users/register/",userModel)
  }

  public addNewAdmin(userModel:UserModel){
    return this.httpClient.post(environment.url+"users/addAdmin/",userModel)
  }

  public getAllAdmin(){
    return this.httpClient.get(environment.url+'users/getAllAdmin/')
  }

  public deleteAdmin(id:string){
    return this.httpClient.delete(environment.url+'users/delete/'+id)
  }

  public getAdminById(id:string){
    return this.httpClient.get(environment.url+'users/getAdminById/'+id)

  }
  public updateAdmin(id:string ,userModel:updateAdmin){
    return this.httpClient.put(environment.url+"users/updateAdmin/"+id,userModel)
  }
}
