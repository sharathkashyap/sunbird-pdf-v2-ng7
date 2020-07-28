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
    'showBorders': true,
    'startFromPage': Number(localStorage.getItem('lastPageVisited')) || 0,
    'contextMenuAllowed': true,
    'showSidebarButton': false,
    'showFindButton': true,
    'showPagingButtons': true,
    'showZoomButtons': true,
    'showPresentationModeButton': false,
    'showPrintButton': true,
    'showDownloadButton': true,
    'showSecondaryToolbarButton': false,
    'showRotateButton': false,
    'showScrollingButton': false,
    'showSpreadButton': false,
    'backgroundColor': '#00000'
    };

  ngOnInit() {

  }

  pdfEventHandler(valueEmitted) {
      console.log(valueEmitted);
      this.pdfMetadataEvents = valueEmitted;
      localStorage.setItem('lastPageVisited', this.pdfMetadataEvents['metaData']['numberOfPagesVisited']);
  }
}
