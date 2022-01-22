import { Component } from '@angular/core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'settings-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'settings';
  menuVisible: boolean = true;
  menuConfig: SubMenuModel[] = [
    {
      title: 'Thiết lập tài khoản',
      childs: [
        { title: 'Thông tin tài khoản', icon: 'account.png', routerLink: '/' },
        {
          title: 'Đăng nhập và bảo mật',
          icon: 'password.png',
          routerLink: '/security',
        },
      ],
    },
    {
      title: 'Thông tin hệ thống',
      childs: [
        {
          title: 'Thuê bao',
          icon: 'membership.png',
          routerLink: '/subscription',
        },
        { title: 'Lịch sử truy cập', icon: 'time.png', routerLink: '/history' },
        {
          title: 'Lịch sử thanh toán',
          icon: 'payment.png',
          routerLink: '/payments',
        },
      ],
    },
  ];

  tonggleMenu() {
    this.menuVisible = !this.menuVisible;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  itemClick() {
    if (window.innerWidth <= 768) {
      this.menuVisible = true;
    }
  }
}
