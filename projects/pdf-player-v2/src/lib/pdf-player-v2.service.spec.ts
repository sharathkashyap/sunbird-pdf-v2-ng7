import { TestBed } from '@angular/core/testing';

import { PdfPlayerV2Service } from './pdf-player-v2.service';

describe('PdfPlayerV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfPlayerV2Service = TestBed.get(PdfPlayerV2Service);
    expect(service).toBeTruthy();
  });
});
