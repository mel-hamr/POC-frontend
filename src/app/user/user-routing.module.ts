import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home-page/home.component';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';

export const pictureRoutes: Routes = [
  { path: 'picture/user', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(pictureRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
