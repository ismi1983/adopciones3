import { Injectable } from "@angular/core";
import { User } from "../models/users";
import { Response } from "../models/loginResponse";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  usrUrl: string = "http://localhost:3000/api/user/login";
  // user:User;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  postUser(user: User): Observable<Response> {
    console.log(user);
    return this.http.post<Response>(this.usrUrl, user);
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

  loggedin() {
    return !!localStorage.getItem("token");
  }
}
