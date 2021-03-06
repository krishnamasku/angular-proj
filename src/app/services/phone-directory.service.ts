import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneDirectoryService {

  /*private _proxy_url = "https://cors-anywhere.herokuapp.com/"
  private _url = "https://cryptic-ocean-17869.herokuapp.com/phone/";*/
  private _url = "http://localhost:8080/phone/"	

  constructor(private _http: HttpClient) { }

  getPhoneNumberCombinationsData(number: string): Observable<HttpResponse<[]>> {
    return this._http.get<[]>(this._url + number, { observe: 'response' });
  }

}
