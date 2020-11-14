
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
  title = 'my-app';
operator2:string;
operator: string;
    firstOperand: number;
    secondOperand: number;
     errorMessage: string;
     result: number;
 
  
doCalc(){
  if (((this. firstOperand == 1) || (this. firstOperand == 0)) && ((this.secondOperand == 1) || (this.secondOperand == 0))) {
    if (this. firstOperand != null && this.operator != null && this.secondOperand != null) {
      if (this.operator == '&&') {
        if (this. firstOperand == 1 && this.secondOperand == 1) {
          this.result = 1
          this.errorMessage = "Нет ошибки"
        } else {
          this.result = 0
          this.errorMessage = "Нет ошибки"
        }
      } else if (this.operator == '||') {
        if ((this. firstOperand + this.secondOperand == 1)){
          this.result = 0
          this.errorMessage = "Произведение равно 1 когда все множители равны 1"
         if (this. firstOperand + this.secondOperand == 2){
          this.result = 1
          this.errorMessage = "Нет ошибки"
        }
      }
    }
  } else {
    this.result = null
    this.errorMessage = "Нет ошибки"
  } if (this.operator2 == '!') {
      if (this.result == 1) {
        this.result = 0
      } else {
        if (this.result == 1) 
        this.result = 1
      }
  }
}
}
 }
