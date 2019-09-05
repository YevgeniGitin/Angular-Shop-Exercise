import { Injectable } from '@angular/core';
import translationJson from '../assets/data/translation.json';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  _languages: string[] = ['HE', 'EN', 'RUS'];
  private _selectedLanguage: string = 'EN';
  private defultLanguage: string[] = translationJson.EN;
  private translationLanguage: string[] = translationJson.EN;
  //provide languages list
  get languages(): string[] {
    return this._languages;
  }
  //provide selected language
  get selectedLanguage(): string {
    return this._selectedLanguage;
  }
  set selectedLanguage(lan: string) {
    this._selectedLanguage = lan;
    this.translationLanguage = translationJson[lan];
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
