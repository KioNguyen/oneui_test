import { Component } from '@angular/core';
import { Base } from '@vnpt/oneui-core';

@Component({
  selector: 'app-notfound',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notfound';

  goBack() {
    window.history.back();
  }

  goHome() {
    Base.navigateTo('/home');
  }
}
