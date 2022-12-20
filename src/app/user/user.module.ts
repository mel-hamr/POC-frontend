import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [

    
  ],
  imports: [
    ProfileModule,
    CommonModule
  ]
})
export class UserModule { }
