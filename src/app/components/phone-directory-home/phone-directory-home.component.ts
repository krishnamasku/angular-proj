import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-directory-home',
  templateUrl: './phone-directory-home.component.html',
  styleUrls: ['./phone-directory-home.component.css']
})
export class PhoneDirectoryHomeComponent {

  phoneDirForm = new FormGroup({
    phoneNumber: new FormControl(null, [Validators.required, phoneNumberLengthValidator])
  })

  constructor(private _router: Router) { }

  onSubmit() {
    this._router.navigate(['/phone-list-for', this.phoneDirForm.value.phoneNumber]);
  }

}

function phoneNumberLengthValidator(control: AbstractControl): { [key: string]: any } | null {
  const phoneNumber: string = control.value;
  const regex1: RegExp = new RegExp('^[1-9][0-9]{9}$')
  const regex2: RegExp = new RegExp('^[0-9]{7}$')

  //let size = phoneNumber.length
   
  if (String(phoneNumber).match(regex1) || String(phoneNumber).match(regex2)) {
      return null
  }else if(phoneNumber && phoneNumber.length>6){
    return { 'phoneNumberLengthValidator': true }
  }else{
    return { 'phoneNumberLengthValidator': true }
  }
}