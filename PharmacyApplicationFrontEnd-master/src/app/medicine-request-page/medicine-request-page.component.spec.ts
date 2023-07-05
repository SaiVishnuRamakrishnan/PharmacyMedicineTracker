import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineRequestPageComponent } from './medicine-request-page.component';

describe('MedicineRequestPageComponent', () => {
  let component: MedicineRequestPageComponent;
  let fixture: ComponentFixture<MedicineRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
