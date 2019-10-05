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
<<<<<<< HEAD
    headers: new HttpHeaders({ "Content-Type": "applicaation/json" })
  };
=======
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd
  constructor(private http: HttpClient) {}

  deleteDog(dog: Dog): Observable<Dog> {
    const id = dog.id;
    console.log(`${environment.apiUrl}/${id}`);
    return this.http.delete<Dog>(
      `${environment.apiUrl}/${id}`,
      this.httpOptions
    );
    // console.log('Dog has been is erased');
  }

  public getDogs(): Observable<Dog[]> {
    console.log(this.http.get<Dog[]>(environment.apiUrl));
    return this.http.get<Dog[]>(environment.apiUrl);
  }

  public createDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(environment.apiUrl, dog);
  }
}
