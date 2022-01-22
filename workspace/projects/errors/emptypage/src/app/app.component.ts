import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'emptypage';
  ngOnInit() {}
}
