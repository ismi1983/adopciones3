import { Component, OnInit } from "@angular/core";
import { DogsService } from "../../services/dogs.service";
import { Dog } from "../../models/dogs";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { UserService } from "../../services/users.service";

@Component({
  selector: "app-tablero",
  templateUrl: "./tablero.component.html",
  styleUrls: ["./tablero.component.css"]
})
export class TableroComponent implements OnInit {
  faTrash = faTrash;
  constructor(private dogService: DogsService, logged: UserService) {}

  dogs$: Dog[];

  islogged() {
    return !!localStorage.getItem("token");
  }
  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs$ = dogs));
  }

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
