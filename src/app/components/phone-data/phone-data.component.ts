
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

  numbers: Array<any> = null;
  totalRecords: number
  page: number = 1
  isParamValid: boolean = false;

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
      if(numberParam 
          && (numberParam.length == 7 
                || numberParam.length == 10)){
        this.isParamValid = true;
        this.loadData(numberParam);
      }
    });

    if(!this.isParamValid)
      this._navigation.navigateToNotFoundPage()
      
  }

  loadData(enteredPhone:string){
    let statusCode:number=0;
    this.phoneDirService
      .getPhoneNumberCombinationsData(enteredPhone)
    .subscribe((res:any) => {
      statusCode = res.status
      let resBody = res.body
      this.numbers = resBody
      this.totalRecords = this.numbers.length
    })
    if(statusCode==0)
      this._navigation.navigateToServerErrorPage()
  }

}
