import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingTenComponent } from './following-ten.component';

describe('FollowingTenComponent', () => {
  let component: FollowingTenComponent;
  let fixture: ComponentFixture<FollowingTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
