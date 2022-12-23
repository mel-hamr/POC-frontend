import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './@features/home/home.module';
import { UserModule } from './@features/user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
