import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from '../interfaces/users.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
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

  addUser(user: User): Observable<User> {
    const userParam = new HttpParams().set('name', user.name);
    return this.http.post<any>('http://localhost:5000/adduser', userParam, httpOptions);
  }

  deleteUser(id: string) {
    const userParam = new HttpParams().set('name', id);
    return this.http.post<any>('http://localhost:5000/adduser', userParam, httpOptions);
  }
}
