import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient, private auth:AngularFireAuth) { }

  register(user:User) {
    this.http.post("http://localhost:3000/api/users/add", user);
  }

  async getCurrentUser():Promise<User> {
    let email:string = (await this.auth.currentUser).email

    const users:User[] = (await this.http.get<User[]>('http://localhost:3000/api/users').toPromise()).filter(currentuser => currentuser.email == email);
    return users[0];
  }

  async getUser(email:string):Promise<User> {
    const users:User[] = (await this.http.get<User[]>('http://localhost:3000/api/users').toPromise()).filter(currentuser => currentuser.email == email);
    return users[0];
  }
}
