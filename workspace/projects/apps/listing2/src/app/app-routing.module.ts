import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create.component/create.component';
import { DetailComponent } from './components/detail.component/detail.component';
import { EditComponent } from './components/edit.component/edit.component';
import { HomeComponent } from './components/home.component/home.component';
import { EmptyRouteComponent } from 'projects/Navigation/header/src/app/empty-route/empty-route.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: ':id', component: DetailComponent },
  { path: ':id/edit', component: EditComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
