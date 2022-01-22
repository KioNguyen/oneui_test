import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { CommonLibraryModule } from 'commonLibrary';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonLibraryModule, VLayoutModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
