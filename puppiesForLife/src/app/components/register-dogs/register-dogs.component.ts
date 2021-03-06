import { Component, OnInit } from "@angular/core";
import { Dog } from "../../models/dogs";
import { DogsService } from "../../services/dogs.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register-dogs",
  templateUrl: "./register-dogs.component.html",
  styleUrls: ["./register-dogs.component.css"]
})
export class RegisterDogsComponent implements OnInit {
  formDog: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    genre: new FormControl("Male", Validators.required),
    description: new FormControl("", Validators.required),
    imgUrl: new FormControl("", Validators.required)
  });

  constructor(private dogService: DogsService) {}

  ngOnInit() {}

  public submit(): void {
    let form = this.formDog;

    if (!form.valid) {
      alert("Data not valid");
      return;
    }
    alert("El perro ha sido registrado")
    this.submitData(form.value);
  }

  private submitData(form: Dog): void {
    this.dogService.createDog(form).subscribe();
    this.formDog.reset();
  }
}
