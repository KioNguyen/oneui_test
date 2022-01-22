import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VSpaceModule } from '@vnpt/oneui-ui/space';
import { VImageModule } from '@vnpt/oneui-ui/image';
import { CommonLibraryModule } from 'commonLibrary';

registerLocaleData(localeVi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    VButtonModule,
    OneuiCoreModule,
    CommonLibraryModule,
    VLayoutModule,
    VGridModule,
    VCardModule,
    VSelectModule,
    VIconModule,
    VDatePickerModule,
    VTableModule,
    VToolTipModule,
    VBadgeModule,
    VSpaceModule,
    VImageModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LOCALE_ID, useValue: 'vi' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
