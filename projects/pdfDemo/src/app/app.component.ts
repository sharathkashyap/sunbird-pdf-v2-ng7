import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pdfDemo';
  pdfMetadataEvents: object;
  constructor() { }
  getPdfConfig = {
    'src': '/assets/gita.pdf',
    'showOpenFileButton': false,
    'showPropertiesButton': false,
    'textLayer': true,
    'showHandToolButton': true,
    'useBrowserLocale': true,
    'showBookmarkButton': false,
    'showBorders': 'showBorders',
    'startFromPage': localStorage.getItem('lastPageVisited') || 0,
    'contextMenuAllowed': true,
    'showSidebarButton': true,
    'showFindButton': true,
    'showPagingButtons': true,
    'showZoomButtons': true,
    'showPresentationModeButton': false,
    'showPrintButton': true,
    'showDownloadButton': true,
    'showSecondaryToolbarButton': true,
    'showRotateButton': true,
    'showScrollingButton': true,
    'showSpreadButton': true,
    };

  ngOnInit() {

  }

  pdfEventHandler(valueEmitted) {
      console.log(valueEmitted);
      this.pdfMetadataEvents = valueEmitted;
      localStorage.setItem('lastPageVisited', this.pdfMetadataEvents['metaData']['numberOfPagesVisited']);
  }
}
