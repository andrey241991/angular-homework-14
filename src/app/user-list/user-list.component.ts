import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selectedUser;
  public users;
  public userService;

  constructor() { }

  ngOnInit() {
    this.userService = new UsersService();
    this.users = this.userService.getUsers();
    console.log('users', this.users);
  }


  userSelected = (user) => {
    this.selectedUser = this.userService.getUser(user.id);
    console.log('selectedUser', this.selectedUser);
  }

}
