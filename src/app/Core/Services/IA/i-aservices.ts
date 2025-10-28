import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAResponse } from '../../Model/Response/IAResponse';
import { rhAssistant } from '../../Constant/EndPoints';
import { MatchingMessage } from '../../Model/Assistant/MatchingModel';

@Injectable({
  providedIn: 'root'
})
export class IAServices {
  constructor(private http : HttpClient){}

  fecthCvResumeByIA(request:any):Observable<IAResponse>{
    return this.http.post<IAResponse>(rhAssistant.IA.resume, request); 
  }

  streamingMatching(request:any):Observable<IAResponse>{
    //Traitement seqientiel des cvs pour une meilleure experience utilisateur
    return this.http.post<IAResponse>(rhAssistant.IA.matching, request); 
  }
  matching(request:any):Observable<MatchingMessage[]>{
    return this.http.post<MatchingMessage[]>(rhAssistant.IA.matching, request); 
  }

  
}
