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
    this._router.navigate(['/phone-list-for', 
        phoneDirForm.value.phoneNumber])
  }

  nagivateToErrorPage(error:any){
    console.log(error)
    if(error.status >= 400 && error.status <= 499){
      this.navigateToNotFoundPage()
    }else if(error.status >= 500 && error.status <= 599){
      this.navigateToServerErrorPage()
    }else if(error.status === 0){
      this.navigateToServerErrorPage()
    }
  }

  navigateToNotFoundPage() {
    this._router.navigate(['/page-not-found']);
  }

  navigateToServerErrorPage(){
    console.log("server page")
    this._router.navigate(['/server-error'])
  }

}
