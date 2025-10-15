import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Layouts/navbar/navbar";
import { Sidebar } from "./Layouts/sidebar/sidebar";
import { Authentication } from "./Components/authentication/authentication";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Authentication],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rhweb');

  isAuth : boolean = true ; 

  //Ici on va utiliser une donnne provenant de l enfant Auth pour modifier l etat de isAuth qui une variable du parent 
  changeAuthStatus(status : boolean){
    
    this.isAuth = status; 
    
  }
}
