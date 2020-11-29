import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible: boolean = false;
  buttonClicks= [];
  totalClicks: number = 0;

  onButtonClick() {
    this.detailsVisible = !this.detailsVisible;
    this.totalClicks += 1;
    // this.buttonClicks.push(this.totalClicks);
    //alternative to creating variable "totalClicks" to hold inscrementing number and push to array is:
    //this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
    //Date() is a built-in JS method that generates a timestamp
  }

  // getColor() {
  //   if(this.totalClicks>4) {
  //     return 'blue' 
  //   }
  // }
}
