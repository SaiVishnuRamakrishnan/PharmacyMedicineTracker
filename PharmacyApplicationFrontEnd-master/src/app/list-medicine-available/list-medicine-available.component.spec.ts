import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicineAvailableComponent } from './list-medicine-available.component';

describe('ListMedicineAvailableComponent', () => {
  let component: ListMedicineAvailableComponent;
  let fixture: ComponentFixture<ListMedicineAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicineAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicineAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
