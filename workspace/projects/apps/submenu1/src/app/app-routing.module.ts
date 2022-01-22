import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { Listing1Component } from './listing1/app.component';
import { ParcelDynmicComponent } from './parcel.component/parcel.component';
import { RouterTestComponent } from './routertest.component/routertest.component';

const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'listing1', component: Listing1Component },
  { path: 'parcel', component: ParcelDynmicComponent },
  { path: 'router', component: RouterTestComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
