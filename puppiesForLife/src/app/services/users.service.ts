import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
        providedIn:'root',
    })


export class UserService{
    usrUrl:string = '';
    user:User;
    constructor(private http:HttpClient){}

    postUser(user:User):Observable<User>{
       return this.http.post<User>(this.usrUrl,user).pipe(
           tap((newUser:User ) => console.log('Usuario creado')),
           catchError(this.handleError<User>('Crear usuario'))
       );
    }

    private handleError<T> (operation = 'operation', result?:T){
        return (error:any):Observable<T> => {
            console.error(error);
            return of(result as T);
            
        }
    }
}
