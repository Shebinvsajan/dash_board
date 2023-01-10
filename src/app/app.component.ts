import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dash_bord';
  sideBar = true
  isSideBarToggle(){
    this.sideBar=!this.sideBar
  }
}
