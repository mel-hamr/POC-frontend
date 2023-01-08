import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeModule } from "@home/home.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { appInfoReducer } from "@store/app-info/reducers/app-info.reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,HomeModule, MatIconModule,HttpClientModule, StoreModule.forRoot({appInfo : appInfoReducer})
    ,StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false})
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
