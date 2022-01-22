import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLogoModule } from '@vnpt/oneui-ui/logo';
import { VDrawerModule } from '@vnpt/oneui-ui/drawer';
import { VAvatarModule } from '@vnpt/oneui-ui/avatar';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import { VnptRootMenuComponent } from './vnpt-root-menu/vnpt-root-menu.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { SettingPanelComponent } from './setting-panel/setting-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { VSpinModule } from '@vnpt/oneui-ui/spin';
import { VMessageModule } from '@vnpt/oneui-ui/message';
import { VNotificationModule } from '@vnpt/oneui-ui/notification';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { CommonLibraryModule } from 'commonLibrary';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'commonLibrary';
import { UsernamePipe } from './username.pipe';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VListModule } from '@vnpt/oneui-ui/list';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
const routes: Routes = [{ path: '**', component: EmptyRouteComponent }];

AuthService.checkLogin();

@NgModule({
  declarations: [
    AppComponent,
    VnptRootMenuComponent,
    NotificationPanelComponent,
    SettingPanelComponent,
    UsernamePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VButtonModule,
    VIconModule,
    VLogoModule,
    VDrawerModule,
    VAvatarModule,
    VDropDownModule,
    VMenuModule,
    VTypographyModule,
    OneuiCoreModule,
    VSpinModule,
    VMessageModule,
    VNotificationModule,
    VInputModule,
    VGridModule,
    CommonLibraryModule,
    VLayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    VDividerModule,
    VListModule,
    VBadgeModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
