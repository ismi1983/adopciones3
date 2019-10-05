<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { User } from "../models/users";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
=======
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd

@Injectable({
  providedIn: "root"
})
export class UserService {
  usrUrl: string = "";
  user: User;
  constructor(private http: HttpClient) {}

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.usrUrl, user).pipe(
      tap((newUser: User) => console.log("Usuario creado")),
      catchError(this.handleError<User>("Crear usuario"))
    );
  }

<<<<<<< HEAD
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
=======
export class UserService{
    usrUrl:string = 'http://localhost:3000/api/user/login';
    // user:User;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
    constructor(private http:HttpClient){}

    postUser(user:User):Observable<User>{
        console.log(user)
       return this.http.post<User>(this.usrUrl,user)
    //    .pipe(tap((newUser:User ) => console.log('Usuario creado')),
    //        catchError(this.handleError<User>('Crear usuario'))
    //    );
    }

    // private handleError<T> (operation = 'operation', result?:T){
    //     return (error:any):Observable<T> => {
    //         console.error(error);
    //         return of(result as T);
            
    //     }
    // } 


    loggedin(){
        return  !!localStorage.getItem('token');
    }

    
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd
}
