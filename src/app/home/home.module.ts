import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home-page/home.component';
import { SectionOneComponent } from './home/section-one-component/section-one/section-one.component';



@NgModule({
  declarations: [HomeComponent, SectionOneComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
