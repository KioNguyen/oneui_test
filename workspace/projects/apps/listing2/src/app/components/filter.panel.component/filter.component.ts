import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-panel',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterPanelComponent implements OnInit {
  @Input() advanceSearch: boolean = false;
  @Output() onSearch = new EventEmitter<any>();
  ngOnInit() {}
}
