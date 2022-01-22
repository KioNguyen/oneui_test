import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSecureComponent } from './components/secure.component/secure.component';
import { UserInfoComponent } from './components/user.component/user.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '', component: UserInfoComponent },
  { path: 'security', component: UserSecureComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
