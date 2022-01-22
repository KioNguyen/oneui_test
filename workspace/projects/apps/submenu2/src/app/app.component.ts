import { Component } from '@angular/core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'app-submenu2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menu: SubMenuModel[] = [
    { title: 'Thêm mới', icon: 'add-folder.png' },
    { title: 'Kết bạn', icon: 'tinder.svg' },
    { title: 'Xuất Excel', icon: 'excel.png' },
    { title: 'Kiểm tra', icon: 'denied.png' },
    { title: '' },
    { title: 'Tài khoản', icon: 'female.png' },
    { title: 'Hóa đơn', icon: 'menu1.png' },
    { title: 'Lịch sử', icon: 'time.png' },
    { title: '' },
    { title: 'Xuất Excel', icon: 'lock.svg' },
    { title: 'Kiểm tra', icon: 'excel.png' },
    { title: 'Bảo mật', icon: 'denied.png' },
    { title: '' },
    { title: 'Thiết lập hệ thống', icon: 'settings.svg' },
  ];
  title = 'submenu2';
}
