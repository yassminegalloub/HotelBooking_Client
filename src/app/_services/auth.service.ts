import { UserService } from './user.service';
import { Role } from './../Role';
import { User } from './../User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const API_URL = 'http://localhost:8080/api/test/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  roles:string[];
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  isAdmin():Boolean{
   if (!this.roles)
       return false;
    return (this.roles.indexOf('ROLE_ADMIN') >-1);
    //this.tokenStorage.getUser().roles== this.roles.indexOf("ROLE_ADMIN")
 }


 
  createUser(User: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/newUser/`, User);
  }

  getUser(): Observable<any> {
    return this.http.get(AUTH_API + 'allUsers')
  }
  //method pour recupére tous les roles
  getRole(): Observable<any> {
    return this.http.get(AUTH_API + 'allRoles')
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeleteUser/${id}`, { responseType: 'text' });
  }
  detailsUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/editUser/${id}`, value);
  }
}
