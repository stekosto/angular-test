import { Injectable } from '@angular/core';
import { User } from '../interfaces/users.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(USERS_API);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${USERS_API}/${id}`);
  }

  deleteUser(user: User) {
    // console.log(user);
    return this.http.delete<User>(`${USERS_API}/${user.id}`);
  }

  createUser(user) {
    // console.log(user);
  }

  updateUser(user: User): Observable<User> {
    // console.log(user);
    return this.http.put<User>(`${USERS_API}/${user.id}`, user);
  }

}
