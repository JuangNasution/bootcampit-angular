import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionTenComponent } from './mention-ten.component';

describe('MentionTenComponent', () => {
  let component: MentionTenComponent;
  let fixture: ComponentFixture<MentionTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
