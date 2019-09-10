import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionLinkComponent } from './content-projection-link.component';

describe('ContentProjectionLinkComponent', () => {
  let component: ContentProjectionLinkComponent;
  let fixture: ComponentFixture<ContentProjectionLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
