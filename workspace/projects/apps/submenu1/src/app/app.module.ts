import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { CommonLibraryModule } from 'commonLibrary';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { DemoComponent } from './demo/demo.component';
import { RouterModule } from '@angular/router';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { VTabsModule } from '@vnpt/oneui-ui/tabs';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { VEmptyModule } from '@vnpt/oneui-ui/empty';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { VDrawerModule } from '@vnpt/oneui-ui/drawer';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VCheckboxModule } from '@vnpt/oneui-ui/checkbox';
import { VModalModule } from '@vnpt/oneui-ui/modal';
import { VDescriptionsModule } from '@vnpt/oneui-ui/descriptions';
import { Listing1Component } from './listing1/app.component';
import { FilterPanelComponent } from './listing1/filter.panel.component/filter.component';
import { ActionBarComponent } from './listing1/action.bar.component/action.bar.component';
import { CreateComponent } from './listing1/create.component/create.component';
import { DetailComponent } from './listing1/detail.component/detail.component';
import { ParcelDynmicComponent } from './parcel.component/parcel.component';
import { OneuiCoreModule } from '@vnpt/oneui-core';
import { RouterTestComponent } from './routertest.component/routertest.component';

import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Listing1Component,
    FilterPanelComponent,
    ActionBarComponent,
    CreateComponent,
    DetailComponent,
    ParcelDynmicComponent,
    RouterTestComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    VLayoutModule,
    VIconModule,
    VAffixModule,
    CommonLibraryModule,
    VButtonModule,
    OneuiCoreModule,

    VGridModule,
    VDropDownModule,
    VTypographyModule,
    VInputModule,
    FormsModule,
    VSelectModule,
    VDatePickerModule,
    VTabsModule,
    VTableModule,
    VEmptyModule,
    VBadgeModule,
    VToolTipModule,
    VDrawerModule,
    VFormModule,
    ReactiveFormsModule,
    VCheckboxModule,
    VModalModule,
    VDescriptionsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/home/submenu1' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
