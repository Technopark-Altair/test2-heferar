import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
firstOperand: number;
secondOperand: number;
operator:string;
result:number
errorMeesage:string

doCalc(){
if (this.firstOperand != null && this.secondOperand !=null && this.operator != null){
}else if  (this.operator == "||") {
     if (Boolean (1) && Boolean(1)){}
     this.result =1;
     if (Boolean (0) && Boolean(1)){}
     this.result =null;
     this.errorMeesage = "Если в выражении есть хотя бы  один Нуль,выражение равно Нулю"
     if (Boolean (1) && Boolean(0)){}
     this.result =null;
     this.errorMeesage = "Если в выражении есть хотя бы  один Нуль,выражение равно Нулю"
     if (Boolean (0) && Boolean(0)){}
     this.result =null;
     this.errorMeesage = "Если в выражении есть хотя бы  один Нуль,выражение равно Нулю"
}else if (this.operator ="||") {
       if (Boolean (1) || Boolean(1)){
        this.result = 1;
       if (Boolean (1) || Boolean(0)){
        this.result = 1;
       if (Boolean (0) || Boolean(1)){
        this.result = 1;
       if (Boolean (0) || Boolean(0)){}
        this.result = 0;
        this.errorMeesage="Если в выражении нет хотя бы одной единицы ,выражение равно Нулю"
       }else if  (this.operator == "!") {
         if (this.result =0)
          this.result = 1
          if (this.result =1)
          this.result = 0
        }

     }
   }
 }
  }
}


