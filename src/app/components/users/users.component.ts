import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/users.interface';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  private users: Array<User>;
  private user: User;
  private subcription: Subscription;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.subcription = this.usersService.getUsers().subscribe((data: Array<User>) => {
      console.log(data);
      this.users = data;
    });
  }

  getUser(id: string) {
    console.log(id);
    this.usersService.getUser(id).subscribe((data: User) => {
      console.log(data);
      this.user = data;
    });
  }

  handleForm(form: NgForm) {
    console.log(form.value);
    this.usersService.addUser(form.value).subscribe();
  }

  deleteUser(id: string) {
    console.log(id);
    this.usersService.deleteUser(id).subscribe();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
