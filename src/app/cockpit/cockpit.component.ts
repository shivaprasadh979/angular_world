import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Output('serverCreated') serverCreated = new EventEmitter<{serverName : string,serverContent : string}>();
   @Output('blueprintCreated') blueprintCreated = new EventEmitter<{blueprintName : string,blueprintContent : string}>();
   newServerName = '';
    newServerContent = '';
    @ViewChild('newServerRef1') newServerRef1 :ElementRef;
     @ViewChild('newServerContentRef1') newServerContentRef1 :ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
  intializeServer(event : Event){
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
  intializeServerContent(event : Event){
    this.newServerContent = (<HTMLInputElement>event.target).value;
  }
  addNewServer(){
 this.serverCreated.emit({serverName : this.newServerName,serverContent :this.newServerContent});   
   }
  addNewBluePrint(){
  this.blueprintCreated.emit({blueprintName : this.newServerName,blueprintContent :this.newServerContent});
 }
 addNewServerByRef(newServer:HTMLInputElement,newServerContent:HTMLInputElement){
 this.serverCreated.emit({serverName :newServer.value,serverContent :newServerContent.value});   
   }
addNewBlueprintByRef(newServer:HTMLInputElement,newServerContent:HTMLInputElement){
  this.blueprintCreated.emit({blueprintName : newServer.value,blueprintContent :newServerContent.value});
 }
  addNewServerByViewChild(){
 this.serverCreated.emit({serverName : this.newServerRef1.nativeElement.value,serverContent : this.newServerContentRef1.nativeElement.value});   
   }
 addNewServerContentByViewChild(){
 this.blueprintCreated.emit({blueprintName : this.newServerRef1.nativeElement.value,blueprintContent : this.newServerContentRef1.nativeElement.value});   
   }
}
