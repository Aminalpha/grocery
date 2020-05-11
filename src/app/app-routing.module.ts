import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
