import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 gameNumber: number[] = [];
 intializeNumber(gameNumber : {number : number}){
       this.gameNumber.push (gameNumber.number);
 }
}
