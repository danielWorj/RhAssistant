import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PromptService } from '../../../Core/Services/Prompt/prompt-service';
import { PromptIA } from '../../../Core/Model/DB/PromptIA';
import { ResponseServer } from '../../../Core/Model/Response/ResponseServer';

@Component({
  selector: 'app-prompt',
  imports: [],
  templateUrl: './prompt.html',
  styleUrl: './prompt.css'
})
export class Prompt {
  promptForm!:FormGroup; 
  constructor(private fb : FormBuilder, private promptService :PromptService){
    this.promptForm = this.fb.group({
      id : new FormControl(), 
      message :new FormControl(), 
      status : new FormControl()
    }); 
  }

  listPrompt = signal<PromptIA[]>([]); 

  getAllPrompt(){
    this.promptService.getAllPrompt().subscribe({
      next : (data:PromptIA[])=>{
        this.listPrompt.set(data);
      }, 
      error : ()=>{
        console.error('Erreur liste prompt');
      }
    })
  }

  createPrompt(){
    const formData : FormData = new FormData(); 

    formData.append('prompt', JSON.stringify(this.promptForm)); 

    this.promptService.createPrompt(formData).subscribe({
      next : (data :ResponseServer)=>{
        alert(data.message);
      }, 
      error:()=>{
        console.error('Erreur de creation du prompt'); 
      }
    }); 
  }


  ablePrompt(id:number){
    this.promptService.ablePrompt(id).subscribe({
      next : (data :ResponseServer)=>{
        alert(data.message);
      }, 
      error:()=>{
        console.error('Erreur de mise en able du prompt'); 
      }
    }); 
  }

   disablePrompt(id:number){
    this.promptService.disablePrompt(id).subscribe({
      next : (data :ResponseServer)=>{
        alert(data.message);
      }, 
      error:()=>{
        console.error('Erreur de mise en disable  du prompt'); 
      }
    }); 
  }

  getPromptById(id:number){
    this.promptService.disablePrompt(id).subscribe({
      next : (data :ResponseServer)=>{
        alert(data.message);
      }, 
      error:()=>{
        console.error('Erreur de mise en disable  du prompt'); 
      }
    }); 
  }


}
