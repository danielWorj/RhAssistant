import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../../Model/DB/Candidat';
import { rhAssistant } from '../../Constant/EndPoints';
import { ResponseServer } from '../../Model/Response/ResponseServer';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  constructor(private http:HttpClient){}

  getAllCandidat():Observable<Candidat[]>{
    return this.http.get<Candidat[]>(rhAssistant.Candidat.all); 
  }

  getAllCandidatBySecteur(id :number):Observable<Candidat[]>{
    return this.http.get<Candidat[]>(rhAssistant.Candidat.bysecteur+"/"+id); 
  }

  getCandidatByCvName(cvname : string):Observable<Candidat>{
    return this.http.get<Candidat>(rhAssistant.Candidat.bycvname + "/"+cvname); 

  }

  createCandidat(request:any):Observable<ResponseServer>{
    return this.http.post<ResponseServer>(rhAssistant.Candidat.create, request); 
  }

  downloadCV(idcandidat:number):Observable<any>{
    return this.http.get(rhAssistant.Candidat.downloadcv, { responseType: 'blob' });

  }
}
