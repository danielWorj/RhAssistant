import { Component, signal } from '@angular/core';
import { OffreService } from '../../Core/Services/Offre/offre-service';
import { Poste } from '../../Core/Model/DB/Poste';

@Component({
  selector: 'app-matching',
  imports: [],
  templateUrl: './matching.html',
  styleUrl: './matching.css'
})
export class Matching {
   pageName = signal('Matching');

   constructor(private offreService : OffreService){}

   listPoste = signal<Poste[]>([]);
   getAllOffre(){
    this.offreService.getAllOffre().subscribe({
      next : (data : Poste[])=>{
        this.listPoste.set(data); 
      },
      error : ()=>{
        console.log('Erreur list offre : failed');
      }
    })
   }

}
