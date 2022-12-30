import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login/login-component/login-component.component';
import { LoginPageComponent } from './pages/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup-components/signup-components.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupFormHelper } from './components/signup/helpers/signup-form.helper';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    SignupPageComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthenticationRoutingModule,
    MatIconModule
  ],
  providers: [SignupFormHelper],
  exports: [LoginFormComponent, LoginPageComponent]
})
export class AuthenticationModule { }
