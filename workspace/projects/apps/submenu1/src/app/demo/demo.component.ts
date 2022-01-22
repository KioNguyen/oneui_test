import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptydemo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  title = 'emptypage';
  ngOnInit() {}
}
