import { Component,EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-authentication',
  imports: [],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css'
})
export class Authentication {
  //Cette donnee va transiter de auth l'enfant vers app.Ts le parent 
  @Output() statusConnection = new EventEmitter<boolean>(); 
  
  authentification(){
    this.statusConnection.emit(true); 
  }
}
