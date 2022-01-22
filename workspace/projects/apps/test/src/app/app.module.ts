import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonLibraryModule } from 'commonLibrary';
import { OneuiCoreModule } from '@vnpt/oneui-core';

import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';

import { VCardModule } from '@vnpt/oneui-ui/card';
import { VResponsiveModule } from '@vnpt/oneui-ui/responsive';

import { AppDefaultComponent } from './components/defaut/default.component';

import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    AppDefaultComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OneuiCoreModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VLayoutModule,
    VTypographyModule,
    VCardModule,
    VResponsiveModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/home/listing2' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
