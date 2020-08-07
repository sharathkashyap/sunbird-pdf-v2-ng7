import { Component, OnInit, Input, HostListener, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import {
  PagesLoadedEvent, PageRenderedEvent,
  PdfDownloadedEvent, PdfLoadedEvent, TextLayerRenderedEvent, ScaleChangingEvent
} from 'ngx-extended-pdf-viewer/public_api';

import { IPlayerEvent, PdfComponentInput } from './playerEvents';

@Component({
  selector: 'sb-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})

export class PdfViewerComponent implements OnInit, OnDestroy {
  @Input() pdfConfig: PdfComponentInput;
  @Output() sendMetadata: EventEmitter<object> = new EventEmitter<IPlayerEvent>();

  private currentPagePointer: number;
  private totalNumberOfPages: number;
  private pdfPlayerStartTime: number;
  private pdfLastPageTime: number;
  public visits = [];
  private pdfPlayerEvent: IPlayerEvent;


  constructor(
    private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService,
  ) { }

  ngOnDestroy(): void {
    this.setPlayerEvent('END', 'END', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  ngOnInit(): void {
    this.pdfPlayerStartTime = this.pdfLastPageTime = new Date().getTime();
  }


  public setPlayerEvent(eventType: string, eid: string, numberOfPagesVisited: number, numberOfPages: number,
    currentPage: number, pageDuration?: Array<object>, highlights?: Array<object>) {
    this.pdfPlayerEvent = {
      eventType: eventType,
      metaData: {
        eid: eid,
        numberOfPagesVisited: Number(pageDuration.length),
        totalNumberOfPages: numberOfPages,
        currentPagePointer: currentPage,
        pageDuration: pageDuration,
        highlights: highlights,
        sessionId: '',
        userPlayBehavior: [],
      }
    };

    this.sendMetadata.emit(this.pdfPlayerEvent);
  }

  public onPagesLoaded(event: PagesLoadedEvent) {
    this.totalNumberOfPages = event.pagesCount;
    // console.log('onPagesLoaded: Document loaded with ' + event + ' pages');
  }

  public onPageRendered(event: PageRenderedEvent) {
    // this.currentPagePointer = event.pageNumber;
    // const tags = {
    //   'page' : this.currentPagePointer,
    //   'spentTime' : new Date().getTime() - this.pdfLastPageTime
    // };
    // this.visits.push (tags);
    // this.pdfLastPageTime = new Date().getTime();
    // this.setPlayerEvent('HEARTBEAT', 'IMPRESSION', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
    // console.log(event);
  }

  public onPdfLoaded(event: PdfLoadedEvent): void {
    this.setPlayerEvent('START', 'START', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
    // console.log('onPdfLoaded PDF loaded with ' + event.pagesCount + ' pages');
  }

  public onScaleChange(event: ScaleChangingEvent): void {
    console.log(event);
  }

  public onPdfLoadFailed(error: Error): void {
    this.setPlayerEvent('FAILED', 'FAILED', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
    console.log(error);
  }

  public onSourceChange(event: string) {
    // console.log('onSourceChange Source changed. The new file is ' + event);
  }

  // On Zoom + and -
  public onZoomChange(event: any): void {
    this.setPlayerEvent('HEARTBEAT', 'INTERACT', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
    // console.log('onZoomChange');
    // console.log(event);
  }

  // Current Zoom factor
  public selectedZoomFactor(event: any): void {
    // console.log("selectedZoomFactor",event)
  }

  public onTextLayerRendered(event: TextLayerRenderedEvent): void {
    // console.log(event);
    // this.setPlayerEvent('HEARTBEAT', 'IMPRESSION' this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  // Handtool change
  public getSelect(event: any) {
    this.setPlayerEvent('HEARTBEAT', 'INTERACT', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  public onPdfDownloaded(event: PdfDownloadedEvent): void {
    this.setPlayerEvent('HEARTBEAT', 'INTERACT', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  public onAfterPrint() {
    this.setPlayerEvent('HEARTBEAT', 'IMPRESSION', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  public onBeforePrint() {
    // console.log("onBeforePrint",event);
  }

  public onRotationChange(event: any): void {
    this.setPlayerEvent('HEARTBEAT', 'INTERACT', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }

  // On Page next and previous or scroll
  public onPageChange(event: any): void {
    this.currentPagePointer = event;
    const tags = {
      'page': this.currentPagePointer,
      'spentTime': new Date().getTime() - this.pdfLastPageTime
    };
    this.pdfLastPageTime = new Date().getTime();
    this.visits.push(tags);
    this.setPlayerEvent('HEARTBEAT', 'INTERACT', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
    this.setPlayerEvent('HEARTBEAT', 'IMPRESSION', this.currentPagePointer, this.totalNumberOfPages, this.currentPagePointer, this.visits);
  }
}
