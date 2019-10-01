import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableroComponent } from './components/tablero/tablero.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterDogsComponent } from './components/register-dogs/register-dogs.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {path: 'adopcion', component: TableroComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterDogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }