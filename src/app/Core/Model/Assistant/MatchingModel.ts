import { Candidat } from "../DB/Candidat";

export interface MatchingModel{
    candidat : Candidat; 
    score : number ; 
}

export interface MatchingMessage{
    cvname : string ;
    score : number ;
}

export class MatchingModelImpl implements MatchingModel{
    candidat: Candidat ; 
    score: number ;
    constructor(candidat:Candidat, score:number){
        this.candidat=candidat; 
        this.score=score; 
    }

    public get candidatInfo():Candidat{
        return this.candidat; 
    }

    public get matchingScore():number{
        return this.score; 
    }

    public set matchingScore(score:number){
        this.score=score; 
    }   

    public set candidatInfo(candidat:Candidat){
        this.candidat=candidat; 
    }
}