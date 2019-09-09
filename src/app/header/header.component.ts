import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LocalizationService } from '../localization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private localizationService: LocalizationService) {}
  @Output() menu = new EventEmitter<void>(); //out put the menu flag(open or close)
  language: string = 'EN';
  languages: string[] = this.localizationService.languages;
  openmenu() {
    this.menu.emit(); //out put the menu flag(open or close)
  }
  changeLanguage() {
    this.localizationService.changelanguage(this.language);
  }
  ngOnInit() {}
}
