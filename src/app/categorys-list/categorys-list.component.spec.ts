import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysListComponent } from './categorys-list.component';

describe('CategorysListComponent', () => {
  let component: CategorysListComponent;
  let fixture: ComponentFixture<CategorysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
