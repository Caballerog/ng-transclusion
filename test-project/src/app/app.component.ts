import { Component } from '@angular/core';

@Component({
  selector: 'am-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App root component';
  subTitle = 'Subtitle';
  body = 'This is my body';
  // repeatMe = '🤘🏻';
  icon = 'fire';
}
