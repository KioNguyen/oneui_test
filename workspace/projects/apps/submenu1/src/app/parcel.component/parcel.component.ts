import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceldynamic',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css'],
})
export class ParcelDynmicComponent implements OnInit {
  title = 'emptypage';
  customProps: any = { abc: 'ssssss', eee: 'gggggg' };
  ngOnInit() {}
}
