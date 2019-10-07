<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20
import { Component, OnInit } from "@angular/core";
import { DogsService } from "../../services/dogs.service";
import { Dog } from "../../models/dogs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
=======
import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { Dog} from '../../models/dogs'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserService } from "../../services/users.service";


>>>>>>> b7d27347f425e07bf9a925e9cd94a2a23e664fbd

=======
import { UserService } from "../../services/users.service";

>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20
@Component({
  selector: "app-tablero",
  templateUrl: "./tablero.component.html",
  styleUrls: ["./tablero.component.css"]
})
export class TableroComponent implements OnInit {
  faTrash = faTrash;
<<<<<<< HEAD
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
=======
  constructor(private dogService: DogsService, logged: UserService) {}

  dogs$: Dog[];

  islogged() {
    return !!localStorage.getItem("token");
  }
  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs$ = dogs));
  }
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20

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
