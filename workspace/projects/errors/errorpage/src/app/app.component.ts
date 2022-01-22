import { Component } from '@angular/core';
import { Base } from '@vnpt/oneui-core';

@Component({
  selector: 'app-error',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'errorpage';

  goBack() {
    window.history.back();
  }

  goHome() {
    Base.navigateTo('/home');
  }
}
