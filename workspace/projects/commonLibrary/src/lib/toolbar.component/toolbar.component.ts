import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SubMenuModel } from '../models/menu.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @Input() config: SubMenuModel[];
  @Input() fixAtTop: number = 85;
  @Input() bgColor: string;
  @Input() isCollapse: boolean = false;

  screenSize: number = 1200;
  sliceNum: number = 15;

  @Output() itemClick = new EventEmitter<SubMenuModel>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateScreen();
  }

  @ViewChild('toolbarCtn') public toolbarCtn: ElementRef;
  @ViewChild('toolbarWrp') public toolbarWrp: ElementRef;

  constructor(private renderer: Renderer2){


  }

  ngOnInit() {
    setTimeout(() => {
      this.calculateScreen();
    }, 300);
  }

  calculateScreen() {
    this.screenSize = this.toolbarCtn.nativeElement.offsetWidth;
    if (this.screenSize >= 1200) this.sliceNum = 15;
    else if (this.screenSize >= 992) this.sliceNum = 9;
    else if (this.screenSize >= 768) this.sliceNum = 6;
    else if (this.screenSize >= 425) this.sliceNum = 3;
    else this.sliceNum = 2;

    this.renderer.setStyle(this.toolbarWrp.nativeElement, 'width', this.toolbarCtn.nativeElement.offsetWidth+'px');
    this.renderer.setStyle(this.toolbarWrp.nativeElement, 'top', this.fixAtTop+'px');
  }

  tonggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  onItemClick(item: SubMenuModel) {
    this.itemClick.emit(item);
  }

  ngAfterViewInit(){

  }
}

