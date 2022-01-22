import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { VBreadCrumbModule } from '@vnpt/oneui-ui/breadcrumb';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { VAffixModule } from '@vnpt/oneui-ui/affix';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VBreadCrumbModule,
    VIconModule,
    OneuiCoreModule,
    VAffixModule,
    RouterModule.forRoot([{ path: '**', component: EmptyRouteComponent }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
