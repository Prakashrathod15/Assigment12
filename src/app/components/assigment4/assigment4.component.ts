import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment4',
  templateUrl: './assigment4.component.html',
  styleUrl: './assigment4.component.css'
})
export class Assigment4Component {
     
   fruits:string[]=["Apple","Orange","PineApple","Mango","Banana"];
   fruit:string="Apple";
   selectedFruit:string="Apple";

   constructor(){

   }


   onFruitSelectionChange(event:any) {
     console.log("Function hiit ");
     this.selectedFruit = event.target.value;
  }
}
