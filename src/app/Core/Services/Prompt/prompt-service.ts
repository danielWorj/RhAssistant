import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PromptIA } from '../../Model/DB/PromptIA';
import { rhAssistant } from '../../Constant/EndPoints';
import { ResponseServer } from '../../Model/Response/ResponseServer';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  constructor(private http :HttpClient){}

  getAllPrompt():Observable<PromptIA[]>{
    return this.http.get<PromptIA[]>(rhAssistant.Prompt.all); 
  }

  getPromptById(id:number):Observable<PromptIA>{
    return this.http.get<PromptIA>(`${rhAssistant.Prompt.byId}/${id})`); 
  }

  ablePrompt(id:number):Observable<ResponseServer>{
    return this.http.get<ResponseServer>(`${rhAssistant.Prompt.able}/${id})`); 
  }

  disablePrompt(id:number):Observable<ResponseServer>{
    return this.http.get<ResponseServer>(`${rhAssistant.Prompt.disable}/${id})`); 
  }

  createPrompt(request:any):Observable<ResponseServer>{
    return this.http.post<ResponseServer>(rhAssistant.Prompt.create, request);
  }

  
}
