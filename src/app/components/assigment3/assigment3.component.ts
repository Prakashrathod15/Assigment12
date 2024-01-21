import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment3',
  templateUrl: './assigment3.component.html',
  styleUrl: './assigment3.component.css'
})
export class Assigment3Component {
  //Properties
  Numbers:number[]=[10,20,30,40,50];
  var:number=10;

  constructor()
  {
     
  }

  incrementor():void{
    
    let len = this.Numbers.length;
    len--;
    this.Numbers.push(this.Numbers[len]+this.var);
    console.log(this.Numbers);


  }


}
