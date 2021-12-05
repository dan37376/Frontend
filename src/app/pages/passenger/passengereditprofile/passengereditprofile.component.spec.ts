import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengereditprofileComponent } from './passengereditprofile.component';

describe('PassengereditprofileComponent', () => {
  let component: PassengereditprofileComponent;
  let fixture: ComponentFixture<PassengereditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengereditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengereditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
