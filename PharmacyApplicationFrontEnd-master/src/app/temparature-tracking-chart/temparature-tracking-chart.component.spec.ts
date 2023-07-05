import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparatureTrackingChartComponent } from './temparature-tracking-chart.component';

describe('TemparatureTrackingChartComponent', () => {
  let component: TemparatureTrackingChartComponent;
  let fixture: ComponentFixture<TemparatureTrackingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemparatureTrackingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemparatureTrackingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
