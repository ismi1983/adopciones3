import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient ) { }

  getUsers():Observable<User[]>{
    console.log(this.http.get<User[]>(environment.apiUrl))
  return this.http.get<User[]>(environment.apiUrl); 
  
  }


}
