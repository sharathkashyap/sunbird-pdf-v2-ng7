import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPlayerV2Component } from './pdf-player-v2.component';

describe('PdfPlayerV2Component', () => {
  let component: PdfPlayerV2Component;
  let fixture: ComponentFixture<PdfPlayerV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPlayerV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPlayerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
