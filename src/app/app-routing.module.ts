import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@features/home/home/home-page/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users',
    loadChildren: () =>import('./@features/user/user.module').then(m => m.UserModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
