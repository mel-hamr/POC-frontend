import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing';
import { ProfileCardComponent } from './components/profile/profile-card/profile-card-component/profile-card.component';
import { ProfileCardService } from './components/profile/profile-card/services/profile.service';

@NgModule({
  declarations: [
    RolesPageComponent,
    ProfilePageComponent,
    ProfileCardComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  
  providers: [ProfileCardService],
  exports: [ProfileCardComponent, RolesPageComponent, ProfilePageComponent ]
 })
export class ProfileModule { }
