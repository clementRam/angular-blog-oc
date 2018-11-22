import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/interfaces/users.interface';
import * as firebase from 'firebase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Users;
  private device: object = {
    name: 'device',
  };
  constructor() {
    const config = {
      apiKey: 'AIzaSyDjklMt455V1q6yYGuGZiZt6xvap1szQVw',
      authDomain: 'domotic-82b62.firebaseapp.com',
      databaseURL: 'https://domotic-82b62.firebaseio.com',
      projectId: 'domotic-82b62',
      storageBucket: 'domotic-82b62.appspot.com',
      messagingSenderId: '1001357749194'
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
    firebase.database().ref('/').set(this.device);

    // this.usersService.getUsers().subscribe((data: Users) => {
    //   console.log(data);
    //   this.users = data;
    // });
  }
}
