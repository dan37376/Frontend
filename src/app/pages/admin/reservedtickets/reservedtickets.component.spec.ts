import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedticketsComponent } from './reservedtickets.component';

describe('ReservedticketsComponent', () => {
  let component: ReservedticketsComponent;
  let fixture: ComponentFixture<ReservedticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservedticketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
