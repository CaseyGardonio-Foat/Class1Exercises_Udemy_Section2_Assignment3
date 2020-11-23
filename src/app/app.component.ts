import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsVisible: boolean = false
  buttonClicks = []

  onButtonClick() {
    this.detailsVisible = !this.detailsVisible;

    let totalClicks: number = 0;
    totalClicks = totalClicks+1
    console.log(totalClicks);
    this.buttonClicks.push(totalClicks);
  }

  // getColor() {
  //   if(this.instance>4){
  //     return 'blue'
  //   };
  // }
}
