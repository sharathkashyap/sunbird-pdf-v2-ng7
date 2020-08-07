import { NgModule } from '@angular/core';
import { PdfPlayerV2Component } from './pdf-player-v2.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { navigationctrlComponent } from './navigation-ctrl/navigation-ctrl.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PdfPlayerV2Component, PdfViewerComponent,navigationctrlComponent],
  imports: [
    NgxExtendedPdfViewerModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers:[navigationctrlComponent],
  exports: [PdfPlayerV2Component, PdfViewerComponent]
})
export class PdfPlayerV2Module { }
