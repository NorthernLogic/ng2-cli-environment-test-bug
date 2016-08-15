import { Component } from '@angular/core';

import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [TestService],
})
export class AppComponent {
  title = 'app works!';

  constructor(testService: TestService) {
    console.log(testService);
  }
}
