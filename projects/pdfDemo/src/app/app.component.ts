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
  pdfPlayerConfig = {
    'src': '/assets/gita.pdf',
    'showOpenFileButton': false,
    'showPropertiesButton': false,
    'textLayer': true,
    'showHandToolButton': false,
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
    'backgroundColor': '#00000',
    'navigationConf' : {
      'isNavCtrl': true,
      'alignment': 'middle',
      'isLeftEnable': true,
      'isRightEnable': true,
      'isFirstPage': true,
      'isLastPage': false,
      'leftIcon': '',
      'rightIcon': '',
      'leftIconUrl': 'assets/back.png',
      'rightIconUrl': 'assets/next.png',
      'iconSize': 'fa-3x'

    }
};

  ngOnInit() {

  }

  pdfEventHandler(valueEmitted) {
      console.log(valueEmitted);
      this.pdfMetadataEvents = valueEmitted;
      localStorage.setItem('lastPageVisited', this.pdfMetadataEvents['metaData']['currentPagePointer']);
  }

  public navigationHandler(event: any) {
    event === 'next' ?
    (window as any).PDFViewerApplication.eventBus.dispatch('nextpage') :
    (window as any).PDFViewerApplication.eventBus.dispatch('previouspage');
  }
}
