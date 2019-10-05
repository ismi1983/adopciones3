<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { DogsService } from "../../services/dogs.service";
import { Dog } from "../../models/dogs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
=======
import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { Dog} from '../../models/dogs'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserService } from "../../services/users.service";


>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd

@Component({
  selector: "app-tablero",
  templateUrl: "./tablero.component.html",
  styleUrls: ["./tablero.component.css"]
})
export class TableroComponent implements OnInit {
  faTrash = faTrash;
<<<<<<< HEAD
  constructor(private dogService: DogsService) {}
=======
  constructor( private dogService:DogsService, logged:UserService ) { }
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd

  dogs$: Dog[];

<<<<<<< HEAD
  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs$ = dogs));
  }
=======
islogged(){
  return  !!localStorage.getItem('token');
}
  getDogs():void{
    this.dogService.getDogs().subscribe(dogs => this.dogs$ = dogs);
  };
>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd

  ngOnInit(): void {
    this.getDogs();
  }
  deleteDog(dog: Dog): void {
    // Takes out the dog form the view
    this.dogs$ = this.dogs$.filter(d => d !== dog);
    // pass the dog object to the service
    this.dogService.deleteDog(dog).subscribe();
  }
}
