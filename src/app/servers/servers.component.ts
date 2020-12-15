import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation : ViewEncapsulation.None,
})
export class ServersComponent implements OnInit {
    @Input('serverElement') serverItem : {name : string,content :string,type :string};
    // @Input('simple') simplicity : any;
    // @Input('fun') testing : Function;
      
  constructor() { }

  ngOnInit(): void {
  }

}
