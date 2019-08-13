import { Component, OnInit } from "@angular/core";
import{ trigger , state , style , animate , transition } from '@angular/animations';
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations:[trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate('1.5s')),
  ])]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
