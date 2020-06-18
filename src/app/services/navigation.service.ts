import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router:Router, private _activatedRoute: ActivatedRoute) { }

  getHomePage(){
    this._router.navigate(['/home']);
  }

  getPhoneDataPage(phoneDirForm:FormGroup){
    this._router.navigate(['/phone-list-for', phoneDirForm.value.phoneNumber]);
  }

  getBadRequestPage(){
    this._router.navigate(['/bad-request']);
  }

}
