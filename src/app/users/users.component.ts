import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../shared/interfaces/users.interface';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  viewUser: User;
  editUser: User;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  onViewUser(event: User) {
    // console.log(event);
    this.userService.getUser(event.id).subscribe((data: User) => {
      this.viewUser = data;
      // this.viewUser.emit(this.viewUser.id);
    });
  }

  onRemoveUser(event: User) {
    // console.log(event);
    this.userService.deleteUser(event).subscribe(() => {
      this.users = this.users.filter((user: User) => {
          return user.id !== event.id;
        });
    });
  }


  onCreateUser(event: User) {
    this.userService.createUser(event);
    // this.users = this.users.filter((user: User) => {
      //   return user.id !== event.id;
      // });
    // console.log(event);
  }

  onQuickEditUser(event: User) {
    this.userService.updateUser(event).subscribe(() => {
      this.users = this.users.map((user: User) => {
        if (user.id === event.id) {
          user = Object.assign({}, user, event);
        }
        return user;
      });
    });
  }

  onEditUser(event: User) {
    this.userService.getUser(event.id).subscribe((data: User) => {
      this.editUser = data;
      // this.viewUser.emit(this.viewUser.id);
    });
  }
}
