import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';

const pictureRoutes: Routes = [
  { path: '', component: ProfilePageComponent },
  // { path: '', redirectTo: 'profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(pictureRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
