import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TableroComponent } from "./components/tablero/tablero.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { RegisterDogsComponent } from "./components/register-dogs/register-dogs.component";
<<<<<<< HEAD
=======
import { AuthGuard } from "./auth.guard";
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "adopcion", component: TableroComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
<<<<<<< HEAD
  { path: "registerDog", component: RegisterDogsComponent },
  { path: "signup", component: SignupComponent }
=======
  {
    path: "registerDog",
    component: RegisterDogsComponent,
    canActivate: [AuthGuard]
  }
>>>>>>> cbaf001c26b3f795e88fcea4474944089cac8a20
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
