export interface IPlayerEvent {
    eventType: string;
    metaData: IPdfMetaData | any;
}

// Generic metadata for player event
interface IPdfMetaData {
    numberOfPagesVisited: number;
    totalNumberOfPages: number;
    currentPagePointer: number;
    pageDuration: Array<object>;
    highlights: Array<object>;
    sessionId: string;
    userPlayBehavior: Array<object>;
    eid : string;
}

export interface PdfComponentInput {
    src: string;
    showOpenFileButton: boolean;
    showPropertiesButton: boolean;
    textLayer: boolean;
    showHandToolButton: boolean;
    useBrowserLocale: boolean;
    showBookmarkButton: boolean;
    showBorders: boolean;
    startFromPage: number;
    contextMenuAllowed: boolean;
    showSidebarButton: boolean;
    showFindButton: boolean;
    showPagingButtons: boolean;
    showZoomButtons: boolean;
    showPresentationModeButton: boolean;
    showPrintButton: boolean;
    showDownloadButton: boolean;
    showSecondaryToolbarButton: boolean;
    showRotateButton: boolean;
    showScrollingButton: boolean;
    showSpreadButton: boolean;
}

export interface navComponentInput {
    isNavCtrl: boolean;
    alignment: string;
    isLeftEnable: boolean;
    isRightEnable: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    leftIcon: string;
    rightIcon: string;
    iconSize: string;
    leftIconUrl: string;
    rightIconUrl: string;
}
export interface IEventBus {
    _listeners: Map<string, (event: any) => void>;
    on(eventName: string, listener: (event: any) => void);
    off(eventName: string, listener: (event: any) => void);
    dispatch(eventName: string, options?: any): void;
}
export interface IPDFViewerAppConfig {
    defaultUrl: string;
    filenameForDownload: string;
    sidebarViewOnLoad: 0 | 1;
}
export interface IPDFViewer {
    currentPageLabel: string | undefined;
    currentPageNumber: number;
    currentScaleValue: string | number;
    pagesRotation: 0 | 90 | 180 | 270;
    removePageBorders: boolean;
    spreadMode: 0 | 1 | 2;
  }
export interface IPDFViewerApplication {
    appConfig: IPDFViewerAppConfig;
    _boundEvents: any;
    enablePrint: boolean;
    eventBus: IEventBus;
    isViewerEmbedded: boolean;
    onError: (error: Error) => void;
    page: number;
    pagesCount: number;
    pdfDocument: any;
    pdfLinkService: any;
    pdfSidebar: any;
    pdfViewer: IPDFViewer;
    printKeyDownListener: undefined | ((this: Window, ev: KeyboardEvent) => any);
    sidebarViewOnLoad: 0 | 1;
    spreadModeOnLoad: 0 | 1 | 2;
    secondaryToolbar: any;
    toolbar: any;
    viewer: HTMLDivElement;
    cleanup(): void;
    close(): void;
    open(source: string | ArrayBuffer | {range: any} | any, options?: any): Promise<any>;
    unbindEvents(): void;
    unbindWindowEvents(): void;
  }
