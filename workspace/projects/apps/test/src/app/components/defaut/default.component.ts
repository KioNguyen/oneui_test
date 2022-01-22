import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class AppDefaultComponent implements OnInit {
  title = 'emptypage';
  ngOnInit() {}
}
