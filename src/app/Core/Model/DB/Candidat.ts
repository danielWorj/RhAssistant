import { Poste } from "./Poste";
import { Utilisateur } from "./Utilisateur";

export interface Candidat extends Utilisateur{
    poste : Poste ; 

}