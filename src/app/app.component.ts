import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  title = "Phone Directory";

  phoneDirForm = new FormGroup({
    phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(10), phoneNumberLengthValidator])
  })

  constructor(private _router: Router) { }

  onSubmit() {
    this._router.navigate(['/phone-list-for', this.phoneDirForm.value.phoneNumber]);
  }

}

function phoneNumberLengthValidator(control: AbstractControl): { [key: string]: any } | null {
  const phoneNumber: string = control.value;
  const regex1: RegExp = new RegExp('^[1-9][0-9]{9}$');
  const regex2: RegExp = new RegExp('^[0-9]{7}$');
   
  if (String(phoneNumber).match(regex1) || String(phoneNumber).match(regex2)) {
      return null;
  }else{
    return { 'phoneNumberLengthValidator': true };
  }
}