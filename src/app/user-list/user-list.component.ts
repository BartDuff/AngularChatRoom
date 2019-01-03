import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor() { 
    this.users = [
      { user_id: 1, pseudo: "Florian", password: "12345" },
      { user_id: 2, pseudo: "Marina", password: "123456" },
      { user_id: 3, pseudo: "Patrice", password: "123" },
      { user_id: 4, pseudo: "Jimmy", password: "456" }
    ];
  }

  ngOnInit() {
  }

}
