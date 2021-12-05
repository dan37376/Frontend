import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewpassengerComponent } from './adminviewpassenger.component';

describe('AdminviewpassengerComponent', () => {
  let component: AdminviewpassengerComponent;
  let fixture: ComponentFixture<AdminviewpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
