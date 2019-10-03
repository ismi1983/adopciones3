import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { faSignInAlt, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { LoginService } from "src/app/login.service";

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
    password: new FormControl("", Validators.required),
    passwordVerified: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor() {}

  ngOnInit() {}
  msjLogin: string;
  onLogin(data: FormGroup): void {
    if (data.valid) {
    } else {
      this.msjLogin = "El usuario o la contrseña no coinciden.";
    }
  }
}
