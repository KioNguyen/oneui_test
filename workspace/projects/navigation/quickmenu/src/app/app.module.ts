import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { QuickMenuComponent } from './quick-menu/quick-menu.component';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CommonLibraryModule } from 'commonLibrary';

@NgModule({
  declarations: [AppComponent, QuickMenuComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    VButtonModule,
    VIconModule,
    VToolTipModule,
    OneuiCoreModule,
    CommonLibraryModule,
    RouterModule.forRoot([{ path: '**', component: EmptyRouteComponent }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
