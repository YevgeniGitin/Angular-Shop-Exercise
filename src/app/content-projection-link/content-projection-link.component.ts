import { Component, OnInit, ContentChildren, ElementRef, QueryList, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-content-projection-link',
  templateUrl: './content-projection-link.component.html',
  styleUrls: ['./content-projection-link.component.css']
})
export class ContentProjectionLinkComponent implements OnInit, AfterViewInit {
  @ContentChildren('link') links: QueryList<ElementRef>;

  constructor() {}
  ngAfterViewInit() {
    //for each element set the target
    this.links.forEach(link => {
      link.nativeElement.setAttribute('target', '_blank');
    });
  }

  ngOnInit() {}
}
