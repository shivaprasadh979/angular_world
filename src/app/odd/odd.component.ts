import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
@Input('oddNumber') oddNumber :number;
  constructor() { }

  ngOnInit(): void {
  }

}
