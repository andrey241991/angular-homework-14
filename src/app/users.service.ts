import { Injectable } from '@angular/core';
import { mockUsers } from './data/mock-users';
import { mockUser } from './data/mock-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public getUsers() {
    const mockUsersInst = new mockUsers();
    return mockUsersInst.users;
  }

  public getUser(id) {
    const mockUserInst = new mockUser();
    const selectedUser = mockUserInst.users.filter(item => {
      return item.id === id
    })
    return selectedUser[0];
  }

  constructor() { }
}
