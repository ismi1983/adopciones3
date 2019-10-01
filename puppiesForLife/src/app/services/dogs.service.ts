import { Injectable } from "@angular/core";
import { Dog } from "../models/dogs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CssSelector } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class DogsService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'applicaation/json'})
  }
  constructor(private http: HttpClient) {}

  deleteDog(dog:Dog):Observable<Dog> {
    
    const id = dog.id;
    console.log(`${environment.apiUrl}/${id}`);
    return this.http.delete<Dog>(`${environment.apiUrl}/${id}`,this.httpOptions);
    // console.log('Dog has been is erased');
  }

  getDogs(): Observable<Dog[]> {
    console.log(this.http.get<Dog[]>(environment.apiUrl));
    return this.http.get<Dog[]>(environment.apiUrl);
  }
}
