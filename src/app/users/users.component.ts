import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/users.interface';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onRemoveUser(event: User) {
    this.userService.deleteUser(event.id);
    // this.users = this.users.filter((user: User) => {
      //   return user.id !== event.id;
      // });
    console.log(event);
  }

  onCreateUser(event: User) {
    this.userService.createUser(event);
    // this.users = this.users.filter((user: User) => {
      //   return user.id !== event.id;
      // });
    console.log(event);
  }

  onEditUser(event: User) {
    this.userService.editUser(event.id);
    // this.users = this.users.map((user: User) => {
    //   if (user.id === event.id) {
    //     user = Object.assign({}, user, event);
    //   }
    // });
    console.log(event);
  }

}
