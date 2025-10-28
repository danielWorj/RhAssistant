import { Component, signal } from '@angular/core';
import { Prompt } from '../prompt/prompt';
import { OffreEmploi } from '../offre-emploi/offre-emploi';

@Component({
  selector: 'app-configuration',
  imports: [Prompt ,OffreEmploi],
  templateUrl: './configuration.html',
  styleUrl: './configuration.css'
})
export class Configuration {
  pageName = signal<string>('Configuration');

}
