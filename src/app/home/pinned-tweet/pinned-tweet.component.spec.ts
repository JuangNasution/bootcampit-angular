import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedTweetComponent } from './pinned-tweet.component';

describe('PinnedTweetComponent', () => {
  let component: PinnedTweetComponent;
  let fixture: ComponentFixture<PinnedTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
