import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  images:string[] = ["../../../assets/images/coffee.jpg","../../../assets/images/waterfall.jpg"];
  names:string[]  = ["coffee","waterfall"];
  index:number = 0;
  
 
  constructor(){

  }

  // Event Handler
  next():void{
     
      this.index++;

      if(this.images.length==this.index)
      this.index = 0;


  }

}
