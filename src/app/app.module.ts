import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModule } from './user/profile/profile.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home/home-page/home.component';
import { UserRoutingModule } from './user/user-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, ProfileModule,HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
