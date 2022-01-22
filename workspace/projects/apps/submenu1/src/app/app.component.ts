import { Component } from '@angular/core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'app-submenu1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'submenu1';
  menuVisible: boolean = true;
  showMenuLeft: boolean = true;
  menuConfig: SubMenuModel[] = [
    {
      title: 'Nội bộ MicroApp',
      childs: [
        { title: 'Trang Trắng', icon: 'lock.svg', routerLink: '/' },
        {
          title: 'Trang danh sách CRUD',
          icon: 'menu1.png',
          routerLink: '/listing1',
        },
        {
          title: 'Nhúng MicroApp vào Component',
          icon: 'settings.svg',
          routerLink: '/parcel',
        },
        {
          title: 'Test Liên kết Router',
          icon: 'female.png',
          routerLink: '/router',
        },
      ],
    },
    {
      title: 'Các chức năng phụ',
      childs: [
        { title: 'Trang 404', icon: 'lock.svg', vRouterLink: '/errorpage' },
        { title: 'Trang 500', icon: 'menu1.png', vRouterLink: '/notfound' },
        { title: 'Trang Login', icon: 'settings.svg', vRouterLink: '/login' },
        {
          title: 'Trang 403',
          icon: 'female.png',
          vRouterLink: '/nopermission',
        },
      ],
    },
    {
      title: 'Liên kết mở rộng',
      childs: [
        { title: 'Facebook', href: 'https://www.facebook.com/' },
        { title: 'Google', href: 'http://google.com/' },
        { title: 'Github', href: 'http://github.com/' },
      ],
    },
  ];

  tonggleMenu() {
    this.menuVisible = !this.menuVisible;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

  hoverMenu() {
    this.showMenuLeft = false;
  }

  closeMenu() {
    this.showMenuLeft = true;
  }

  itemClick() {
    if (window.innerWidth <= 768) {
      this.menuVisible = true;
    }
  }
}
