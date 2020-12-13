import {Component} from '@angular/core'
@Component({
     selector :'app-server',
     templateUrl : './server.component.html',
     styles :[`
     .offline  {
         color : 'yellow';
     }
     `]
}) 
export class ServerComponent {
     serverId = Math.random();
     serverStatus = '';
     getStatus(){
         this.serverStatus = Math.random() > 0.5 ? "offline" : "online";
      }
      getColor(){
          return this.serverStatus == "offline" ? 'green' : 'red';
      }   
}