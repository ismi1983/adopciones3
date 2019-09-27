import { Injectable } from '@angular/core';
import { Dog } from '../models/dogs';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { CssSelector } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http:HttpClient) { }

getDogs():Observable<Dog[]>{
  console.log(this.http.get<Dog[]>(environment.apiUrl))
return this.http.get<Dog[]>(environment.apiUrl); 

}


}

