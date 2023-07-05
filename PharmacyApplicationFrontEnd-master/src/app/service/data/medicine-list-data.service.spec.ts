import { TestBed } from '@angular/core/testing';

import { MedicineListDataService } from './medicine-list-data.service';

describe('MedicineListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicineListDataService = TestBed.get(MedicineListDataService);
    expect(service).toBeTruthy();
  });
});
