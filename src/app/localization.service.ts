<<<<<<< HEAD

import { Injectable } from "@angular/core";
import translationJson from "../assets/data/translation.json";
=======
import { Injectable } from '@angular/core';
import translationJson from '../assets/data/translation.json';
>>>>>>> AngularShopRoutingExercise


@Injectable({
  providedIn: 'root'
})

export class LocalizationService {
<<<<<<< HEAD
_languages:string[]=["HE","EN","RUS"];
private _selectedLanguage:string="EN";
=======
_languages:string[]=['HE','EN','RUS'];
private _selectedLanguage:string='EN';
>>>>>>> AngularShopRoutingExercise
private defultLanguage:string[]=translationJson.EN;
private translationLanguage:string[]=translationJson.EN;
//provide languages list
  get languages():string[]{
    return this._languages;
  }
  //provide selected language
  get selectedLanguage():string{
    return this._selectedLanguage;
  }
  set selectedLanguage(lan:string){
    this._selectedLanguage=lan;
<<<<<<< HEAD
    if(lan==="HE"){
      this.translationLanguage=translationJson.HE;
    }else if(lan==="RUS"){
      this.translationLanguage=translationJson.RUS;
    }else if(lan==="EN"){
=======
    if(lan==='HE'){
      this.translationLanguage=translationJson.HE;
    }else if(lan==='RUS'){
      this.translationLanguage=translationJson.RUS;
    }else if(lan==='EN'){
>>>>>>> AngularShopRoutingExercise
      this.translationLanguage=translationJson.EN;
    }
    
  }
//translate a word by getting the word and language
  translate(word:string,language:string):string{
<<<<<<< HEAD
    if(language!=="EN"){
=======
    if(language!=='EN'){
>>>>>>> AngularShopRoutingExercise
      let index:number=this.defultLanguage.findIndex(o=>o===word);
      return this.translationLanguage[index];
    }else{
      return word;  
    }
  }
  constructor() { }
}


