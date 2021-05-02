import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Dependency injections: HTTPCLIENT AND ANGULAR FIREAUTH
  constructor(private http:HttpClient, private auth:AngularFireAuth) { }

  // Method to register users
  register(user:User) {
    let postdata = {
      email: `${user.email}`,
      firstname: `${user.firstname}`,
      lastname: `${user.lastname}`,
      telephone: `233${user.telephone}`,
    }

    this.http.post("https://jobsrus.herokuapp.com/api/users/add", JSON.stringify(postdata), {headers: {"Content-type": "application/json"}})
      .toPromise()
  }

  async getCurrentUser():Promise<User> {
    let email:string = (await this.auth.currentUser).email

    const users:User[] = (await this.http.get<User[]>('https://jobsrus.herokuapp.com/api/users').toPromise()).filter(currentuser => currentuser.email == email);
    return users[0];
  }

  async getUser(email:string):Promise<User> {
    const users:User[] = (await this.http.get<User[]>('https://jobsrus.herokuapp.com/api/users').toPromise()).filter(currentuser => currentuser.email == email);
    return users[0];
  }
}
