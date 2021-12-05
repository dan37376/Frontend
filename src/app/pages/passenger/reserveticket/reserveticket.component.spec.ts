import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveticketComponent } from './reserveticket.component';

describe('ReserveticketComponent', () => {
  let component: ReserveticketComponent;
  let fixture: ComponentFixture<ReserveticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
