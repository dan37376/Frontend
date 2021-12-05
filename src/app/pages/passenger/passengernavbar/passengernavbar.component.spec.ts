import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengernavbarComponent } from './passengernavbar.component';

describe('PassengernavbarComponent', () => {
  let component: PassengernavbarComponent;
  let fixture: ComponentFixture<PassengernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengernavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
