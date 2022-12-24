import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProfileModule,
    UserRoutingModule
  ],

})
export class UserModule { }
