import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {RequestModel} from '../model/requestModel'

@Injectable({
  providedIn: 'root'
})
export class RequestMachanicService {

  constructor(private httpClient: HttpClient) { }

  public requestMachanic(userRequestModel:RequestModel) {
    return this.httpClient.post(environment.url+"request/makeRequest",userRequestModel)
 }

 public getUserRistory(email:string){
   return this.httpClient.get(environment.url+"request/history/"+email)
 }
}
