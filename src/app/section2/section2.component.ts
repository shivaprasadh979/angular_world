import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  showPassword = false;
  password = "shiva@123";
  instance = 0;
  instances = [];
  constructor() { }
  getDetails(){
     this.showPassword = true;
     this.instances.push(++this.instance)
  }
  changeColor(instance) {
    return instance  > 5 ? "green" : "";
  }
  ngOnInit(): void {
  }

}
