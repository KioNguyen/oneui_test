import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VLogoModule } from '@vnpt/oneui-ui/logo';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { AppComponent } from './app.component';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { APP_BASE_HREF } from '@angular/common';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VCheckboxModule } from '@vnpt/oneui-ui/checkbox';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VAlertModule } from '@vnpt/oneui-ui/alert';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VNotificationModule } from '@vnpt/oneui-ui/notification';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { CommonLibraryModule } from 'commonLibrary';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VLogoModule,
    VFormModule,
    VInputModule,
    VIconModule,
    VCheckboxModule,
    VButtonModule,
    VGridModule,
    VDividerModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    VAlertModule,
    VTypographyModule,
    VLayoutModule,
    VNotificationModule,
    OneuiCoreModule,
    CommonLibraryModule,
    HttpClientModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
