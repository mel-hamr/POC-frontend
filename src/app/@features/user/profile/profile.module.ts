import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileCardService } from './components/profile/profile-card-component/services/profile.service';
import { ProfileCardComponent } from './components/profile/profile-card-component/profile-card/profile-card.component';



@NgModule({
  declarations: [
    RolesPageComponent,
    ProfilePageComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ProfileCardService],
  exports: [ProfileCardComponent, RolesPageComponent, ProfilePageComponent ]
 })
export class ProfileModule { }
