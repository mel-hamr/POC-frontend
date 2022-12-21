import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './pages/roles-page/roles-page.component';
import { RoleComponentComponent } from './components/roles/role-component/role-component.component';



@NgModule({
  declarations: [
    RolesPageComponent,
    RoleComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
