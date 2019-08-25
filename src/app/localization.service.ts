import { Injectable } from "@angular/core";
import translationJson from "../assets/data/translation.json";

interface Translation{
  EN:string[];
  HE:string[];
}

@Injectable({
  providedIn: 'root'
})

export class LocalizationService {
_languages:string[]=["HE","EN"];
private translation:Translation=translationJson;
//provide languages list
  get languages():string[]{
    return this._languages;
  }
//translate a word by getting the word and language
  translate(word:string,languag:string):string{
    if(languag==="HE"){
      let index:number=this.translation.EN.findIndex(o=>o===word);
      return this.translation.HE[index];
    }else{
      return word;  
    }
  }
  constructor() { }
}
