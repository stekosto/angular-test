import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UsersService } from '../shared/services/users.service';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [UserComponent, UsersComponent, AddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
