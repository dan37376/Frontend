import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewbusComponent } from './adminviewbus.component';

describe('AdminviewbusComponent', () => {
  let component: AdminviewbusComponent;
  let fixture: ComponentFixture<AdminviewbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewbusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
