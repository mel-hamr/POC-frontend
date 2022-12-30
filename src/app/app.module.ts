import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeModule } from "@home/home.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,HomeModule, MatIconModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
