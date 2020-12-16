import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output('numberEvent') event1 = new EventEmitter<{number : number}>(); 
  static i : number = 0;
  intervalId;
  startGameEvent(){ 
  this.intervalId = setInterval(()=>{ 
    this.event1.emit({number:(GameControlsComponent.i)++});
     console.log("event started");
  },1000)};
  
  endGameEvent(){
    console.log("event emitted");
    clearInterval(this.intervalId);
   }  

}
