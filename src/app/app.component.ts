import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // String variable
  courseTitle = 'Angular Core';

  // Data object variable
  data = {
    courseSubTitle: 'Deep Dive',
  };

  // Public string variable
  public courseTitlePublic: string;
  constructor() {
    this.courseTitlePublic = 'Hello world!';
  }


}
