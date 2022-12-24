import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home-page/home.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';

export const pictureRoutes: Routes = [
  { path: 'profile/user', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(pictureRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
