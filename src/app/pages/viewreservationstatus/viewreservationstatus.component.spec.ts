import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreservationstatusComponent } from './viewreservationstatus.component';

describe('ViewreservationstatusComponent', () => {
  let component: ViewreservationstatusComponent;
  let fixture: ComponentFixture<ViewreservationstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreservationstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreservationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
