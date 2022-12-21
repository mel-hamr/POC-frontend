import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home-page/home.component';
import { ProfilePageComponent } from './user/profile/pages/profile-page/profile-page.component';
import { pictureRoutes, UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'picture', component: ProfilePageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), UserRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
