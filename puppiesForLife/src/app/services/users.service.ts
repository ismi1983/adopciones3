import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { ResponseLogin } from '../models/loginResponse';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
        providedIn:'root',
    })


export class UserService{
    usrUrl:string = 'http://localhost:3000/api/user/login';
    // user:User;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
    constructor(private http:HttpClient){}

    postUser(user:User):Observable<ResponseLogin>{
        console.log(user)
       return this.http.post<ResponseLogin>(this.usrUrl,user);
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

    
}
