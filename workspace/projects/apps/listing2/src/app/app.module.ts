import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CommonLibraryModule } from 'commonLibrary';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import localeVi from '@angular/common/locales/vi';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { VTabsModule } from '@vnpt/oneui-ui/tabs';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { VEmptyModule } from '@vnpt/oneui-ui/empty';
import { Listing2Service } from './services/listing2.service';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { FilterPanelComponent } from './components/filter.panel.component/filter.component';
import { ActionBarComponent } from './components/action.bar.component/action.bar.component';
import { VDrawerModule } from '@vnpt/oneui-ui/drawer';
import { CreateComponent } from './components/create.component/create.component';
import { HomeComponent } from './components/home.component/home.component';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VCheckboxModule } from '@vnpt/oneui-ui/checkbox';
import { VModalModule } from '@vnpt/oneui-ui/modal';
import { DetailComponent } from './components/detail.component/detail.component';
import { EditComponent } from './components/edit.component/edit.component';
import { VDescriptionsModule } from '@vnpt/oneui-ui/descriptions';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VRadioModule } from '@vnpt/oneui-ui/radio';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VStepsModule } from '@vnpt/oneui-ui/steps';
import { Step1FormComponent } from './components/create.component/step1.component';
import { Step2FormComponent } from './components/create.component/step2.component';
import { ReviewFormComponent } from './components/create.component/review.component';

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    FilterPanelComponent,
    ActionBarComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    HomeComponent,
    Step1FormComponent,
    Step2FormComponent,
    ReviewFormComponent,
  ],
  imports: [
    RouterModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VDropDownModule,
    VLayoutModule,
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
    VCardModule,
    VAffixModule,
    VRadioModule,
    VDividerModule,
    VStepsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/home/listing2' },
    Listing2Service,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
