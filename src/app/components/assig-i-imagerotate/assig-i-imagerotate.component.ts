import { Component } from '@angular/core';

@Component({
  selector: 'app-assig-i-imagerotate',
  templateUrl: './assig-i-imagerotate.component.html',
  styleUrl: './assig-i-imagerotate.component.css'
})
export class AssigIImagerotateComponent {
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
