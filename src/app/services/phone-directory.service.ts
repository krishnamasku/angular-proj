import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneDirectoryService {

  private _url = "http://localhost:8080/phone/";

  constructor(private _http:HttpClient) { }

  getPhoneNumberCombinationsData(number:string):Observable<[]>{
    return this._http.get<[]>(this._url+number);
  }

}
