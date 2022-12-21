import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileCardComponent } from './profile-card-component/profile-card/profile-card.component';

@NgModule({
  declarations: [ProfilePageComponent, ProfileCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfilePageComponent]
})
export class ProfileModule { }
