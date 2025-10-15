import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rhAssistant } from '../../Constant/EndPoints';
import { Poste } from '../../Model/DB/Poste';
import { ResponseServer } from '../../Model/Response/ResponseServer';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  constructor(private http :HttpClient){}

  getAllOffre():Observable<Poste[]>{
    return this.http.get<Poste[]>(rhAssistant.Offre.all)
  }

  createOffre(request:any):Observable<ResponseServer>{
    return this.http.post<ResponseServer>(rhAssistant.Offre.create, request)
  }

  
}


