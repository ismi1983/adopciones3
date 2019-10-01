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

public getDogs():Observable<Dog[]>{
  console.log(this.http.get<Dog[]>(environment.apiUrl));
  return this.http.get<Dog[]>(environment.apiUrl); 
}

public createDog(dog:Dog):Observable<Dog>{
  return this.http.post<Dog>(environment.apiUrl, dog);
}


}

