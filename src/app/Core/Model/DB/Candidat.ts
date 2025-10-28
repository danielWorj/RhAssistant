import { Secteur } from "./Secteur";
import { Utilisateur } from "./Utilisateur";

export interface Candidat extends Utilisateur{
    cv : string ;
    secteur : Secteur;  
    

}