import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:5000/users');
  }

  getUser(id: string): Observable<{}> {
    return this.http.get(`http://localhost:5000/user/${id}`);
  }

  addUser(user: User) {
    return this.http.post<User>('http://localhost:5000/adduser', user, httpOptions);
  }
}
