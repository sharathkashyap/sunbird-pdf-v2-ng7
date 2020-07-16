import { NgModule } from '@angular/core';
import { PdfPlayerV2Component } from './pdf-player-v2.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [PdfPlayerV2Component, PdfViewerComponent],
  imports: [
  ],
  exports: [PdfPlayerV2Component]
})
export class PdfPlayerV2Module { }
