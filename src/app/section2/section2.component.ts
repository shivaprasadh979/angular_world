import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  showPassword = false;
  password = "shiva@123";
  btnClickCounter = [];
  
  constructor() { }
  getDetails(){
     this.showPassword = true;
     this.btnClickCounter.push(0);
  }
  changeColor(num) {
    return num   > 5 ? "green" : "";
  }
  ngOnInit(): void {
  }

}
