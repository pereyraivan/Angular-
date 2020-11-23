import { Component } from '@angular/core';
import {Link} from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[];

  constructor(){
    this.links =[
      new Link("Angular", 'http://angular.io',100),
      new Link("youtube", 'http://youtube.com',50),
    ];
    console.log(this.links)
  }
  
  addLink(titulo: HTMLInputElement, link:HTMLInputElement){
   this.links.push(new Link(titulo.value, link.value));
   titulo.value ="";
   link.value = "";
   return false;
  }
}
