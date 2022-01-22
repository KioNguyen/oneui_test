import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { CommonLibraryModule } from 'commonLibrary';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    VAffixModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    CommonLibraryModule,
    VDividerModule,
    VDropDownModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/home/submenu2' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
