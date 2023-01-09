import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // String variable
  courseTitle = 'Angular Core';

  // Public string variable
  public courseTitlePublic: string;

  constructor() {
    this.courseTitlePublic = 'Hello world!';
  }

  // Data object
  data = {
    courseSubTitle: 'Deep Dive',
  };
}
