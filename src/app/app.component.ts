import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // simplicity = "Hey I am your parent";
  serverItems  = [{name :"Test",content : "This is a test sever",type:"server"},{
    name : "Test Blueprint",content : "This is a Test Blueprint" ,type : "blueprint"
  }];
  // testFunction () {
  //   return "hello world"
  // }
  onServerAdded(server:{serverName : string,serverContent:string}){
      this.serverItems.push({name:server.serverName,content:server.serverContent,type:"server"});
  }
  onBlueprintAdded(blueprint:{blueprintName : string,blueprintContent:string}){
    this.serverItems.push({name:blueprint.blueprintName,content:blueprint.blueprintName,type:"blueprint"});
}
}
