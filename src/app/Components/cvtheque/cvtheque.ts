import { Component, signal } from '@angular/core';
import { CandidatService } from '../../Core/Services/Candidat/candidat-service';
import { Candidat } from '../../Core/Model/DB/Candidat';

@Component({
  selector: 'app-cvtheque',
  imports: [],
  templateUrl: './cvtheque.html',
  styleUrl: './cvtheque.css'
})
export class Cvtheque {
   pageName = signal('CVTheque');

   constructor(private candidatService : CandidatService){}

   listCandidat = signal<Candidat[]>([]); 
   // sélection courante affichée dans le modal
   selectedCandidate: Candidat | null = null;
   
   getAllCandidat(){
    this.candidatService.getAllCandidat().subscribe({
      next : (data: Candidat[])=>{
        this.listCandidat.set(data); 
      }, 
      error : ()=>{
        console.log('Erreur list de candidat'); 
      }
    })
   }

  // appelé depuis le template pour définir le candidat sélectionné avant d'ouvrir le modal
  selectCandidate(c?: Candidat){
    this.selectedCandidate = c || null;
  }


}
