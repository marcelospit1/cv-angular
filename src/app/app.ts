import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ✅ en plural y con array
})

export default class App {   
  year = new Date().getFullYear();
}
