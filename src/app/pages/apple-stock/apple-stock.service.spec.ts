import { TestBed } from '@angular/core/testing';

import { AppleStockService } from './apple-stock.service';

describe('AppleStockService', () => {
  let service: AppleStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppleStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
