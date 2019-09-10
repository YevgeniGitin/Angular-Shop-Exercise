import { Injectable } from '@angular/core';
import translationJson from '../../assets/data/translation.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  _languages: string[] = ['HE', 'EN', 'RUS'];
  private lanBehaviorSubject=new BehaviorSubject<string>("EN");
  readonly selectedLanguage = this.lanBehaviorSubject.asObservable();
  private defultLanguage: string[] = translationJson.EN;
  private translationLanguage: string[] = translationJson.EN;
  //provide languages list
  get languages(): string[] {
    return this._languages;
  }

  changelanguage(ln:string){
    this.lanBehaviorSubject.next(ln);
    this.translationLanguage=translationJson[ln];
  }

  //translate a word by getting the word and language
  translate(word: string, language: string): string {
    if (language !== 'EN') {
      let index: number = this.defultLanguage.findIndex(o => o === word);
      return this.translationLanguage[index];
    } else {
      return word;
    }
  }
  
  constructor() {}
}
