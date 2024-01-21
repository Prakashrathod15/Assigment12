import { Component } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrl: './assigment2.component.css'
})
export class Assigment2Component {
  images:string[] = ["../../../assets/images/rohit.jpeg","../../../assets/images/shubman.jpg","../../../assets/images/Virat.jpg","../../../assets/images/shreyash.jpeg","../../../assets/images/rishab.jpg"];
  names:string[]  = ["Rohit","Shubhaman","Virat","Shreyash","Rishabh"];
  stop1:boolean = false;
  stop2:boolean = false;
  index:number = 0;
  
 
  constructor(){

  }

  // Event Handler
  next():void{
      
      if(this.images.length-1==this.index)
      {
        this.stop1 = true;
        console.log("hit");
      }else{
        this.index++;
        this.stop2 = false;
      }
      
  }

  privious():void
  {
    if(this.index==0)
    {
         this.stop2 = true;
    }else{
          
          this.index--;
          this.stop1 = false;
    }
     
  }

}
