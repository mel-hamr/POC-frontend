import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component:  SignupPageComponent},

];
@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
