import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/@core/guards/user.guard';

const usersRoutes: Routes = [
    { path: 'auth',
    loadChildren: () =>import('./authentication/authentication.module').then(a => a.AuthenticationModule)},
    { path: 'profile',
        loadChildren: () =>import('./profile/profile.module').then(m => m.ProfileModule),
        canActivate : [UserGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
