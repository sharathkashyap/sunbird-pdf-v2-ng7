import { NgModule } from '@angular/core';
import { PdfPlayerV2Component } from './pdf-player-v2.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PdfPlayerV2Component, PdfViewerComponent],
  imports: [
    NgxExtendedPdfViewerModule,
    CommonModule
  ],
  exports: [PdfPlayerV2Component, PdfViewerComponent]
})
export class PdfPlayerV2Module { }

