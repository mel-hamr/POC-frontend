import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from 'src/app/@core/resolvers/profile.resolver';
import { ProfileUpdateComponent } from './components/profile/profile-update/profile-update-component/profile-update.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const profileRoutes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'update/:profileId', component: ProfileUpdateComponent ,resolve: {
    profile: ProfileResolver
  }  },

];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}