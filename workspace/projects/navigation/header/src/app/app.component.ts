import { Component, Input, OnInit } from '@angular/core';
import { Base } from '@vnpt/oneui-core';
import { VDrawerPlacement } from '@vnpt/oneui-ui/drawer';
import { VMessageService } from '@vnpt/oneui-ui/message';
import { VNotificationService } from '@vnpt/oneui-ui/notification';
import { AuthService, UserModel } from 'commonLibrary';

@Component({
  selector: 'app-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'header';

  searchPanelVisible: boolean = false;

  showDrawerLeft: boolean = false;
  showDrawerLeftHover: boolean = false;
  placementLeft: VDrawerPlacement = 'left';
  placementRight: VDrawerPlacement = 'right';
  showDrawerRight: boolean = false;

  loadingVisible: boolean = false;

  rightPanelMode: number;

  user: UserModel;

  openLeftMenu(): void {
    this.showDrawerLeft = true;
  }

  closeLeftMenu(): void {
    this.showDrawerLeft = false;
  }

  openRightMenu(): void {
    this.showDrawerRight = true;
  }

  closeRightMenu(): void {
    this.showDrawerRight = false;
  }

  showSettingPanel() {
    this.rightPanelMode = 2;
    this.openRightMenu();
  }

  showNotificationPanel() {
    this.rightPanelMode = 1;
    this.openRightMenu();
  }

  showLoading() {
    this.loadingVisible = true;
  }

  hideLoading() {
    this.loadingVisible = false;
  }

  constructor(
    private message: VMessageService,
    private notification: VNotificationService,
    private authService: AuthService
  ) {
    Base.registerEvent('hideRootMenu', (event: any) => {
      this.closeLeftMenu();
    });

    Base.registerEvent(Base.SHOW_LOADING, (event: any) => {
      this.showLoading();
    });

    Base.registerEvent(Base.HIDE_LOADING, (event: any) => {
      this.hideLoading();
    });

    Base.registerEvent(Base.TOAST_EVENT, (event: any) => {
      if (event.detail) {
        switch (event.detail.mesageType) {
          case Base.TOAST_OK:
            this.message.success(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_WARNING:
            this.message.warning(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_ERROR:
            this.message.error(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          case Base.TOAST_LOADING:
            this.message.loading(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
          default:
            this.message.info(event.detail.message, {
              vDuration: event.detail.duration,
            });
            break;
        }
      }
    });

    Base.registerEvent(Base.NOTI_EVENT, (event: any) => {
      if (event.detail) {
        switch (event.detail.mesageType) {
          case Base.NOTI_OK:
            this.notification.create(
              'success',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          case Base.NOTI_WARNING:
            this.notification.create(
              'warning',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          case Base.NOTI_ERROR:
            this.notification.create(
              'error',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
          default:
            this.notification.create(
              'info',
              event.detail.messageTitle,
              event.detail.message,
              { vDuration: event.detail.duration, vPlacement: 'bottomRight' }
            );
            break;
        }
      }
    });
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (!this.user) {
      this.authService.logout();
    }
  }

  settingAcountClick() {
    setTimeout(() => {
      Base.navigateTo('/home/settings');
    }, 300);
  }

  logout() {
    this.authService.logout();
  }
}
