import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(phoneNumber:string): string {
    let newPhoneNUmber = phoneNumber
    let numbers = phoneNumber.split("")
    
    let phone1 = ''
    let phone2 = ''
    let phone3 = ''
    
    if(numbers.length==10){
      for(let i =0;i<numbers.length;i++){
        if(i<3)
          phone1 = phone1+numbers[i]
        else if(i>2 && i<6)
          phone2 = phone2+numbers[i]
        else if(i>5)
          phone3 = phone3+numbers[i]  
      }
      phoneNumber = phone1+"-"+phone2+"-"+phone3
    }

    if(numbers.length==7){
      for(let i =0;i<numbers.length;i++){
        if(i<3)
          phone2 = phone2+numbers[i]
        else if(i>2)
          phone3 = phone3+numbers[i]
      }
      phoneNumber = "XXX-"+phone2+"-"+phone3
    }
    
    return phoneNumber;
  }

}
