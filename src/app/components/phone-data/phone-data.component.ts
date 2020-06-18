
import { Component, OnInit } from '@angular/core';
import { PhoneDirectoryService } from 'src/app/services/phone-directory.service';
import { ActivatedRoute, Router, Navigation } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-phone-data',
  templateUrl: './phone-data.component.html',
  styleUrls: ['./phone-data.component.css']
})
export class PhoneDataComponent implements OnInit {

  numbers: Array<any>
  totalRecords: number
  page: number = 1
  isDataLoaded:boolean = false

  constructor(
    private phoneDirService: PhoneDirectoryService, 
    private route: ActivatedRoute, 
    private _navigation: NavigationService) {
    this.numbers = new Array<any>()
  }

  ngOnInit() {
    this.getPhoneData();
  }

  getPhoneData() {
    this.route.params.subscribe((params) => {
      const numberParam = params['number'];
      this.loadData(numberParam);
    });
  }

  loadData(enteredPhone:string){
    this.phoneDirService
      .getPhoneNumberCombinationsData(enteredPhone)
    .subscribe((res:any) => {
      if(res.status === 200)
        this.isDataLoaded = true
        this.numbers = res.body
        this.totalRecords = this.numbers.length
      },
      error => {
        this._navigation.nagivateToErrorPage(error);
      });
  }

}
