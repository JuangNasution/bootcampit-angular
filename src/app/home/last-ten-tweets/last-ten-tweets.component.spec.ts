import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTenTweetsComponent } from './last-ten-tweets.component';

describe('LastTenTweetsComponent', () => {
  let component: LastTenTweetsComponent;
  let fixture: ComponentFixture<LastTenTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTenTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTenTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
