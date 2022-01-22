import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { VAvatarModule } from '@vnpt/oneui-ui/avatar';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { CommonLibraryModule } from 'commonLibrary';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSecureComponent } from './components/secure.component/secure.component';
import { UserInfoComponent } from './components/user.component/user.component';

@NgModule({
  declarations: [AppComponent, UserInfoComponent, UserSecureComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    VLayoutModule,
    VIconModule,
    CommonLibraryModule,
    OneuiCoreModule,
    VButtonModule,
    VAvatarModule,
    VTypographyModule,
    VGridModule,
    VSelectModule,
    FormsModule,
    VFormModule,
    ReactiveFormsModule,
    VInputModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/home/settings' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
