import { Component, signal } from '@angular/core';
import { CandidatService } from '../../Core/Services/Candidat/candidat-service';
import { Candidat } from '../../Core/Model/DB/Candidat';
import { IAServices } from '../../Core/Services/IA/i-aservices';
import { IAResponse } from '../../Core/Model/Response/IAResponse';

@Component({
  selector: 'app-cvtheque',
  imports: [],
  templateUrl: './cvtheque.html',
  styleUrl: './cvtheque.css'
})
export class Cvtheque {
   pageName = signal('CVTheque');

   constructor(private candidatService : CandidatService , private iaService : IAServices){}

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

  resumeCV = signal<string>(''); 
  fecthResumeByCV(description :string , cvName:string){
    //Cette fonction prnd en parametre la prompt du resume et le nom du cv a analyser
    //Les cvs sont stocke dans un espace et python va aller chercher le cv dont le nom correspond puis l'analyser.

    const formData : FormData = new FormData(); 

    formData.append("prompt", JSON.stringify(description));
    formData.append("file", cvName); 

    //On envoie la requete et on attend de recevoir un message
    this.iaService.fecthCvResumeByIA(formData).subscribe({
      next : (data :IAResponse)=>{
        this.resumeCV.set(data.message); 
      }, 
      error : ()=>{
        console.error('Le resume du cv par l ia a echoue '); 
      }
    })
  }

}
