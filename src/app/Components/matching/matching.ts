import { Component, signal } from '@angular/core';
import { OffreService } from '../../Core/Services/Offre/offre-service';
import { Offre } from '../../Core/Model/DB/Offre';
import { IAServices } from '../../Core/Services/IA/i-aservices';
import { IAResponse } from '../../Core/Model/Response/IAResponse';
import { Candidat } from '../../Core/Model/DB/Candidat';
import { CandidatService } from '../../Core/Services/Candidat/candidat-service';
import { OffreEmploi } from '../Configuration/offre-emploi/offre-emploi';
import { MatchingMessage, MatchingModel } from '../../Core/Model/Assistant/MatchingModel';

@Component({
  selector: 'app-matching',
  imports: [],
  templateUrl: './matching.html',
  styleUrl: './matching.css'
})
export class Matching {
   pageName = signal('Matching');

   constructor(private candidatService : CandidatService ,  private offreService : OffreService , private iaService : IAServices){}

   listPoste = signal<Offre[]>([]);
   getAllOffre(){
    this.offreService.getAllOffre().subscribe({
      next : (data : Offre[])=>{
        this.listPoste.set(data); 
      },
      error : ()=>{
        console.log('Erreur list offre : failed');
      }
    })
   }

   //Pour faire du matching j'auris besoin du cv et de la descritpion du poste 

   matchingScore = signal<string>(''); 

   matchingMessage : MatchingMessage[] =[];

   doMatching(descriptionPoste : string , cvName : string ){
    //Ca c'est le matching pour un candidat a un poste 
    //Find candidat by cv 

    //this.findCandidatByCvname(cvName); 

    //Find matching score 
    const formData : FormData = new FormData(); 

    formData.append("description", JSON.stringify(descriptionPoste));
    formData.append("cvName", JSON.stringify(cvName));

    this.iaService.matching(formData).subscribe({
      next : (data :MatchingMessage[])=>{

        //this.matchingScore.set(data.message); 

        //console.log(`cvName : ${cvName} et score obtenu : ${data}`);

        for (let i = 0; i < data.length; i++) {

          const candidatFound = this.findCandidatByCvname(data[i].cvname);

          if(candidatFound){
            this.matchingMessage.push({
              cvname : data[i].cvname,
              score : data[i].score
            });
          }
          
        }
        
      }, error : ()=>{
        console.error(`Erreur lors du matching du cv  `); 
      }
    })

   }

   //candidatByCV = signal<Candidat>(); 
   candidatByCV !:Candidat; 
   findCandidatByCvname(cvName : string): Candidat{
    let candidatFound !:Candidat;
      this.candidatService.getCandidatByCvName(cvName).subscribe({
        next : (data : Candidat)=>{
          candidatFound=data;
        }, 
        error:()=>{
          console.log('Erreur de fecth candidat by cv name'); 
          
        }

      }); 

      return candidatFound;
   }

   //get candidat by secteur
   listCandidat:Candidat[]=[]; 

   getALLcandidatBySecteur(idSecteur:number){
       this.candidatService.getAllCandidatBySecteur(idSecteur).subscribe({
        next : (data : Candidat[])=>{
          this.listCandidat =data;
        }, 
        error:()=>{
          console.log('Erreur de fecth candidat by cv name')
        }
      })
   }

   OffreSelected!:Offre; 
   
   matchingResultList : MatchingModel[]=[]; 
   isSpinnerMatching = signal<boolean>(false); 

   resultMatchingListToDisplay = signal<MatchingModel[]>([]); 

   doMatchingForOffre(offre : Offre){
    //Faire du matching pour cet offre 

    this.isSpinnerMatching.set(true); 

    //1- recuperer la liste des candidat du meme secteur que l'offre
    this.getALLcandidatBySecteur(offre.secteur.id); 

    //faire du matching pour chacun de ces candidats 
      for (let i = 0; i < this.listCandidat.length; i++) {
        //matching 
        this.doStreamMatching(offre.descritpion ,this.listCandidat[i].cv); 
        
      }

   }

   
  doStreamMatching(descriptionPoste : string , cvName : string ){
    //Ca c'est le matching pour un candidat a un poste 
    //L'avanatage de cette approche est permettre un afficahge progressif des resultats du matchingg.
    
    //Construction de la requete 
    const formData : FormData = new FormData(); 

    formData.append("description", JSON.stringify(descriptionPoste));
    formData.append("cvName", JSON.stringify(cvName));

    //Envoie de la requete
    this.iaService.streamingMatching(formData).subscribe({
      next : (data :IAResponse)=>{
        // le iA reponse est un score 
        if (data.message!='') {
          this.isSpinnerMatching.set(false)
        }
        console.log(`cvName : ${cvName} et score obtenu : ${data}`);

        const candidatFound = this.findCandidatByCvname(cvName);

        if(candidatFound){
          this.matchingResultList.push({
            candidat : candidatFound,
            score : parseInt(data.message) 
          });

          this.resultMatchingListToDisplay.set(this.matchingResultList);
        }
        
      }, error : ()=>{
        console.error(`Erreur lors du streaming matching du cv  `); 
      }
    })

   }

  
}
