import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Listing1Model } from '../model/listing1_model';

@Component({
  selector: 'my-actionbar',
  templateUrl: './action.bar.component.html',
  styleUrls: ['./action.bar.component.css'],
})
export class ActionBarComponent implements OnInit, OnChanges {
  @Input() selected: number;
  @Output() onClick = new EventEmitter<string>();

  @ViewChild('defaultLeft') public defaultLeft: TemplateRef<any>;
  @ViewChild('defaultRight') public defaultRight: TemplateRef<any>;

  @ViewChild('singleLeft') public singleLeft: TemplateRef<any>;
  @ViewChild('singleRight') public singleRight: TemplateRef<any>;

  @ViewChild('mutiLeft') public mutiLeft: TemplateRef<any>;
  @ViewChild('mutiRight') public mutiRight: TemplateRef<any>;

  left: TemplateRef<void>;
  right: TemplateRef<void>;

  ngOnInit() {
    setTimeout(() => {
      this.left = this.defaultLeft;
      this.right = this.defaultRight;
    }, 50);
  }

  ngOnChanges() {
    if (this.selected && this.selected > 0) {
      if (this.selected > 1) {
        this.left = this.mutiLeft;
        this.right = this.mutiRight;
      } else {
        this.left = this.singleLeft;
        this.right = this.singleRight;
      }
    } else {
      this.left = this.defaultLeft;
      this.right = this.defaultRight;
    }
  }

  runCommand(command: string) {
    this.onClick.emit(command);
  }
}
