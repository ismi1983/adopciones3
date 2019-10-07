import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { faSignInAlt, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { User } from "../../models/users";
import { UserService } from "src/app/services/users.service";
import { Router } from "@angular/router";
import { RegisterDogsComponent } from "../register-dogs/register-dogs.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faCoffee = faCoffee;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  msjLogin:string;

  onLogin(data: FormGroup): void {
    if (data.valid) {
      this.submitData(data.value);
    } else {
      this.msjLogin = 'El usuario o la contrseña no coinciden.';
      alert("Data not valid");
      return;
    }
  }

  private submitData(form: User): void {
    this.userService.postUser(form).subscribe(
      res => {
        localStorage.setItem("token", res.data.token);
          this.router.navigate(["/registerDog"]);
          this.userService.getToken();
        // if (res.data.token) {
          
        // } else {
        //   this.msjLogin = 'El usuario, o la contraseña no coinciden';
        // }
      },
      err => console.log(err)
    );
    console.log(form);
  }
}
