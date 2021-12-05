import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbookingsComponent } from './recentbookings.component';

describe('RecentbookingsComponent', () => {
  let component: RecentbookingsComponent;
  let fixture: ComponentFixture<RecentbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
