import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/users.service";
import { User } from "src/app/models/users";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required),
    validatePassword: new FormControl("", Validators.required)
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSignUp(data: FormGroup): void {
    if (data.valid) {
      this.submitData(data.value);
    } else {
      alert("Data not valid1");
      return;
    }
  }

  private submitData(form: User): void {
    this.userService.addUser(form).subscribe(
      res => {
        // if (res.data.status) {
        // localStorage.setItem("token", res.data.token);
        this.router.navigate(["/registerDog"]);
        // } else {
        //   alert("Data not valid2");
        // }
        console.log("user created");
      },
      err => console.log(err)
    );
    console.log(form);
  }

  //   users:User[];
  //   postUser(user:User):void{
  //     if (!user) {
  //       return;
  //     }
  //     this.userService.postUser(user)
  //     .subscribe( user => {
  //       this.users.push(user);
  //     })
  //   }
}
