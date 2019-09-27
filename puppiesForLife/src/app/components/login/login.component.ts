import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import {faSignInAlt, faCoffee }from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faSignInAlt=faSignInAlt;
  faCoffee= faCoffee;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl ("", Validators.required)
  })
 

  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    if(this.loginForm.valid){

    }else{
      alert("Wrong credentials")
    }
  }

}