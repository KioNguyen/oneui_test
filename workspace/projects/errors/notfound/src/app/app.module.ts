import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { VResultModule } from '@vnpt/oneui-ui/result';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VButtonModule,
    OneuiCoreModule,
    VResultModule,
    VLayoutModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
