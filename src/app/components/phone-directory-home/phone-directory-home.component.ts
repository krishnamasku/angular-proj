import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-phone-directory-home',
  templateUrl: './phone-directory-home.component.html',
  styleUrls: ['./phone-directory-home.component.css']
})
export class PhoneDirectoryHomeComponent {

  digitTenWarn: boolean = false;

  phoneDirForm = new FormGroup({
    phoneNumber: new FormControl(null, [Validators.required, phoneNumberLengthValidator])
  })

  constructor(private _navigation: NavigationService) { }

  onBlur(phoneNumber: string) {
    const regex: RegExp = new RegExp('^[1-9][0-9]{9}$')
    if (phoneNumber) {
      if ((phoneNumber.length === 10 && 
              !String(phoneNumber).match(regex))) {
        this.digitTenWarn = true;
      }
    }
  }

  onSubmit() {
    this._navigation.getPhoneDataPage(this.phoneDirForm);
  }

}

function phoneNumberLengthValidator(control: AbstractControl): { [key: string]: any } | null {
  const phoneNumber: string = control.value;
  const regex1: RegExp = new RegExp('^[1-9][0-9]{9}$')
  const regex2: RegExp = new RegExp('^[0-9]{7}$')

  if (String(phoneNumber).match(regex1) || String(phoneNumber).match(regex2)) {
    return null
  } else if (phoneNumber && phoneNumber.length > 6) {
    return { 'phoneNumberLengthValidator': true }
  } else {
    return { 'phoneNumberLengthValidator': true }
  }
}