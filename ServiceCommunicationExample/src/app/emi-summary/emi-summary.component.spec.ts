import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiSummaryComponent } from './emi-summary.component';

describe('EmiSummaryComponent', () => {
  let component: EmiSummaryComponent;
  let fixture: ComponentFixture<EmiSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
