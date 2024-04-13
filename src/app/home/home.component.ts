import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 title:string="hello 1AlINFO5"

 color!:string

 affich(){
    alert("bonjour")
    console.log("hello 1AlINFO5")
 }
}
