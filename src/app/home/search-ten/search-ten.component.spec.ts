import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTenComponent } from './search-ten.component';

describe('SearchTenComponent', () => {
  let component: SearchTenComponent;
  let fixture: ComponentFixture<SearchTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
