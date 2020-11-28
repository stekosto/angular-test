import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UsersService } from '../shared/services/users.service';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [UserComponent, UsersComponent, AddUserComponent, ViewUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
