import { Component, OnInit } from '@angular/core';
import { Base } from '@vnpt/oneui-core';
import { SubMenuModel } from 'commonLibrary';

@Component({
  selector: 'vnpt-root-menu',
  templateUrl: './vnpt-root-menu.component.html',
  styleUrls: ['./vnpt-root-menu.component.css'],
})
export class VnptRootMenuComponent implements OnInit {
  constructor() {}

  menuConfig: SubMenuModel[] = [
    {
      title: 'Các trang chính',
      iconfont: true,
      icon: 'Home',
      childs: [
        { title: 'Trang chủ', icon: 'lock.svg', vRouterLink: '/home' },
        {
          title: 'Trang đăng nhập',
          icon: 'dashboard.png',
          vRouterLink: '/login',
        },
        {
          title: 'Trang listing 1',
          icon: 'menu1.png',
          vRouterLink: '/home/listing1',
        },
        {
          title: 'Trang listing 2',
          icon: 'female.png',
          vRouterLink: '/home/listing',
        },
        {
          title: 'Trang Submenu Dọc',
          icon: 'tinder.svg',
          vRouterLink: '/home/submenu1',
        },
        {
          title: 'Trang Submenu Ngang',
          icon: 'dock.png',
          vRouterLink: '/home/submenu2',
        },
        {
          title: 'Trang Settings',
          icon: 'settings.svg',
          vRouterLink: '/home/settings',
        },
      ],
    },
    {
      title: 'Các trang mở rộng',
      iconfont: true,
      icon: 'NumberedListText',
      childs: [
        {
          title: 'Trang trắng',
          icon: 'paper.png',
          vRouterLink: '/home/emptypage',
        },
        { title: 'Trang lỗi 404', icon: 'error.png', vRouterLink: '/notfound' },
        {
          title: 'Trang lỗi 403',
          icon: 'denied.png',
          vRouterLink: '/nopermission',
        },
        {
          title: 'Trang lỗi 500',
          icon: 'unavailable.svg',
          vRouterLink: '/errorpage',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  itemClick() {
    Base.sendEvent('hideRootMenu', {});
  }
}
