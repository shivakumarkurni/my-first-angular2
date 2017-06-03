import {Component} from '@angular/core'
@Component({
	selector:'sample',
	template:`
	         <div class= "container">
             <h1>This  is my sample page</h1>
             <br>
             He is {{name |uppercase}}  <br>
            
             <img [src]="imageUrl"/> <br><br>
             <button class="btn btn-primary" (click)="runMe()"> Click Me
             </button><br>
             <input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)"/>
             <br>
             {{realName}}
             <br>
             <ul *ngFor="let item of items">
              <li>{{item | uppercase}}</li>
              </ul>
              <br>Display Price:{{price|currency:'INR':true}}
             </div>          
	         `
})

export class SampleComponent{

	private name:string;
	private imageUrl :string;
	private realName:string;
    private showHeader:boolean;
    private items:string[];
    private price:number;
	constructor(){
		this.realName="";
		this.name="Shiva";
		this.imageUrl="http://lorempixel.com/400/200";
		this.showHeader=true;
		this.items=["TV","ac","Car"];
		this.price=1500;
	}
	runMe(){
		console.log("Hey wait!!! did you click me?")
	}
	getValues(event:any){
		console.log(event.target.value)
	}
}