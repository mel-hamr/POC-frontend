import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@features/home/home/home-page/home.component';
import { ProfilePageComponent } from './@features/user/profile/pages/profile-page/profile-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfilePageComponent,
    loadChildren: () =>import('./@features/user/user.module').then(m => m.UserModule)},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
