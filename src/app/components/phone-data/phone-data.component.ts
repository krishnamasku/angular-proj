import { Component, OnInit } from '@angular/core';
import { PhoneDirectoryService } from 'src/app/services/phone-directory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-data',
  templateUrl: './phone-data.component.html',
  styleUrls: ['./phone-data.component.css']
})
export class PhoneDataComponent implements OnInit {

  numbers: Array<any>
  totalRecords: number
  page: number = 1
  isLoading:boolean=true;

  constructor(private phoneDirService: PhoneDirectoryService, private route: ActivatedRoute) {
    this.numbers = new Array<any>()
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const numberParam = params['number'];
      this.phoneDirService.getPhoneNumberCombinationsData(numberParam)
        .subscribe(res => { this.isLoading=false;
                            this.numbers = res;
                            this.totalRecords = this.numbers.length
                          })
    });
  }

}
