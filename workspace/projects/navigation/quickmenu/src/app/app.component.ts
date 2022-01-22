import { Component } from '@angular/core';
import { QuickMenuModel } from './model/appmodel';

@Component({
  selector: 'quickmenu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quickmenu';
  menuConfig: QuickMenuModel[] = [
    {
      routerLink: '/home',
      iconName: 'dashboard.png',
      nameMenu: 'Trang chủ',
    },
    {
      routerLink: '/home/listing1',
      iconName: 'menu1.png',
      nameMenu: 'Trang listring 1',
    },
    {
      routerLink: '/home/listing2',
      iconName: 'female.png',
      nameMenu: ' Trang listing 2',
    },
    {
      routerLink: '/home/submenu1',
      iconName: 'tinder.svg',
      nameMenu: 'Trang submenu dọc',
    },
    {
      routerLink: '/home/submenu2',
      iconName: 'dock.png',
      nameMenu: 'Trang submenu ngang',
    },
    {
      routerLink: '/home/settings',
      iconName: 'settings.svg',
      nameMenu: 'Setting',
    },
    {
      routerLink: '/home2',
      iconName: 'dashboard.png',
      nameMenu: 'Trang chủ',
    },
    {
      routerLink: '/home2/listing1',
      iconName: 'menu1.png',
      nameMenu: 'Trang listing 1',
    },
    {
      routerLink: '/home2/listing2',
      iconName: 'female.png',
      nameMenu: 'Trang listing 2',
    },
    {
      routerLink: '/home2/submenu1',
      iconName: 'tinder.svg',
      nameMenu: 'Trang submenu',
    },
    {
      routerLink: '/home2',
      iconName: 'settings.svg',
      nameMenu: 'Trang setting',
    },
    {
      routerLink: '/home2/listing1',
      iconName: 'menu1.png',
      nameMenu: 'Trang listing 1',
    },
    {
      routerLink: '/home2/listing2',
      iconName: 'female.png',
      nameMenu: 'Trang listing 2',
    },
    {
      routerLink: '/home2/submenu1',
      iconName: 'tinder.svg',
      nameMenu: 'Trang subMenu',
    },
    {
      routerLink: '/home2/settings',
      iconName: 'settings.svg',
      nameMenu: 'Trang setting14',
    },
  ];
}
