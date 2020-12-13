import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  portNumber = 80;
  mode = "offline";
  serverName = '';
  modeStatus(){
    return this.mode;
  }
  userName = '';
  allowNewServer = false;
  subServerName = 'Apache';
  servers = ['Test ','Test2']
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);  
    
  }
  serverStatus (){
    this.mode = "online";
    this.servers.push(this.serverName);
  }
  serverNameChange (event : Event){
     this.serverName = (<HTMLInputElement>event.target).value;
  }
  userNameChange (event : Event){
     this.userName = (<HTMLInputElement>event.target).value;
  }
  clearUserName (){
    this.userName = ''
  }
  userNameStatus () {
    return this.userName ? true : false;
  }
  ngOnInit(): void {
  }

}
