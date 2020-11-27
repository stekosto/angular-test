import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactmeComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
