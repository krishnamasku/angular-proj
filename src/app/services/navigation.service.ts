import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router: Router) { }

  getHomePage() {
    this._router.navigate(['/home'])
  }

  getPhoneDataPage(phoneDirForm: FormGroup) {
    let phoneNUmber = phoneDirForm.value.phoneNumber
    if(phoneNUmber && (phoneNUmber.length==7 || phoneNUmber.length==10))
      this._router.navigate(['/phone-list-for', phoneDirForm.value.phoneNumber])
    else
    this.navigateToNotFoundPage()
  }

  navigateToNotFoundPage() {
    this._router.navigate(['/somethingiswrong']);
  }

  navigateToServerErrorPage(){
    this._router.navigate(['/server-error'])
  }

}
